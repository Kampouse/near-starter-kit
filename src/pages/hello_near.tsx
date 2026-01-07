import { useEffect, useState, useCallback, type ChangeEvent } from 'react';
import { Cards } from '@/components/cards';
import { hotConnector, useNearWallet, walletKeys } from '@/hooks/useNearWallet';
import { useQueryClient } from '@tanstack/react-query';

import { HelloNearContract } from '@/config';

// Contract constant
const CONTRACT = HelloNearContract as string;

const HelloNear = function HelloNear() {
  const {
    nearWallet,
    signedAccountId,
    loading: walletLoading,
    isError,
    error,
  } = useNearWallet();
  const queryClient = useQueryClient();

  const [greeting, setGreeting] = useState<string>('loading...');
  const [newGreeting, setNewGreeting] = useState<string>('loading...');
  const [savingGreeting, setSavingGreeting] = useState<boolean>(false);

  const viewFunction = useCallback(
    async (params: {
      contractId: string;
      method: string;
      args?: Record<string, unknown>;
    }) => {
      if (!hotConnector.nearRpc) throw new Error('NEAR RPC not available');
      return hotConnector.nearRpc.viewMethod({
        contractId: params.contractId,
        methodName: params.method,
        args: params.args || {},
      });
    },
    [],
  );

  const callFunction = useCallback(
    async (params: {
      contractId: string;
      method: string;
      args?: Record<string, unknown>;
    }) => {
      if (!nearWallet) throw new Error('NEAR wallet not connected');
      return nearWallet.sendTransaction({
        receiverId: params.contractId,
        actions: [
          {
            type: 'FunctionCall',
            params: {
              methodName: params.method,
              args: params.args || {},
              gas: '300000000000000',
              deposit: '0',
            },
          },
        ],
      });
    },
    [nearWallet],
  );

  useEffect(() => {
    if (!walletLoading && !isError) {
      viewFunction({
        contractId: CONTRACT,
        method: 'get_greeting',
      })
        .then((greeting: string) => setGreeting(greeting))
        .catch(console.error);
    }
  }, [viewFunction, walletLoading, isError]);

  const loggedIn = !!signedAccountId;

  const saveGreeting = async () => {
    if (isError || !nearWallet) {
      console.error('Wallet not connected or error occurred');
      return;
    }

    try {
      setSavingGreeting(true);
      await callFunction({
        contractId: CONTRACT,
        method: 'set_greeting',
        args: { greeting: newGreeting },
      });

      // Invalidate greeting query to refetch
      await new Promise((resolve) => setTimeout(resolve, 300));
      const greeting = await viewFunction({
        contractId: CONTRACT,
        method: 'get_greeting',
      });
      setGreeting(greeting);
    } catch (error) {
      console.error('Failed to save greeting:', error);
      // Refetch greeting to ensure state consistency
      try {
        const greeting = await viewFunction({
          contractId: CONTRACT,
          method: 'get_greeting',
        });
        setGreeting(greeting);
      } catch (e) {
        console.error('Failed to refetch greeting:', e);
      }
    } finally {
      setSavingGreeting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGreeting(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 md:px-24">
      <div className="flex flex-col justify-center items-center text-sm max-w-[1100px] w-full z-10">
        <p className="relative m-0 p-4 border border-[rgba(172,175,176,0.3)] rounded-[12px] bg-[rgba(238,240,241,0.5)]">
          Interacting with the contract:{' '}
          <code className="font-bold font-mono">{CONTRACT}</code>
        </p>
      </div>
      <div className="relative flex w-full justify-center items-center py-16 flex-col gap-4">
        <h1 className="w-full">
          The contract says: <code>{greeting}</code>
        </h1>

        {isError && error && (
          <div className="w-full mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            <strong>Error:</strong>{' '}
            {error instanceof Error ? error.message : 'Wallet connection error'}
          </div>
        )}

        {walletLoading && (
          <div className="w-full text-center">
            <span className="inline-block animate-spin text-2xl">⌛</span>
            <p className="mt-2 text-gray-600">Connecting to wallet...</p>
          </div>
        )}

        {loggedIn && !walletLoading ? (
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Store a new greeting"
              onChange={handleChange}
              value={newGreeting === 'loading...' ? '' : newGreeting}
              disabled={savingGreeting}
            />
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-r hover:bg-gray-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={saveGreeting}
              disabled={savingGreeting || isError}
            >
              {savingGreeting ? (
                <span className="inline-block animate-spin">⌛</span>
              ) : (
                'Save'
              )}
            </button>
          </div>
        ) : !walletLoading ? (
          <div className="w-full text-center">
            <p className="m-0">Please login to change the greeting</p>
          </div>
        ) : null}
      </div>
      <Cards />
    </main>
  );
};

export default HelloNear;
