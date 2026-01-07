import { useEffect, useState, ChangeEvent } from 'react';
import { Cards } from '@/components/cards';

import { HelloNearContract } from '@/config';
import { useNearWallet } from 'near-connect-hooks';

interface useNearHook {
  signedAccountId: string | null;
  viewFunction: (params: {
    contractId: string;
    method: string;
    args?: Record<string, unknown>;
  }) => Promise<any>;
  callFunction: (params: {
    contractId: string;
    method: string;
    args?: Record<string, unknown>;
  }) => Promise<any>;
}

// Contract constant
const CONTRACT = HelloNearContract as string;

export default function HelloNear() {
  const { signedAccountId, viewFunction, callFunction } =
    useNearWallet() as useNearHook;

  const [greeting, setGreeting] = useState<string>('loading...');
  const [newGreeting, setNewGreeting] = useState<string>('loading...');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  useEffect(() => {
    viewFunction({
      contractId: CONTRACT,
      method: 'get_greeting',
    })
      .then((greeting) => setGreeting(greeting))
      .catch(console.error);
  }, [viewFunction]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  const saveGreeting = async () => {
    try {
      await callFunction({
        contractId: CONTRACT,
        method: 'set_greeting',
        args: { greeting: newGreeting },
      });
    } catch (error) {
      console.error(error);
      const greeting = await viewFunction({
        contractId: CONTRACT,
        method: 'get_greeting',
      });
      setGreeting(greeting);
    }

    setShowSpinner(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setGreeting(newGreeting);
    setShowSpinner(false);
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
      <div className="relative flex w-full justify-center items-center py-16">
        <h1 className="w-full">
          The contract says: <code>{greeting}</code>
        </h1>

        {loggedIn ? (
          <div className="flex">
            <input
              type="text"
              className="w-48 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Store a new greeting"
              onChange={handleChange}
            />
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded-r hover:bg-gray-700 transition-colors"
              onClick={saveGreeting}
            >
              <span hidden={showSpinner}>Save</span>
              {showSpinner && (
                <span className="inline-block animate-spin">⌛</span>
              )}
            </button>
          </div>
        ) : (
          <div className="w-full text-right">
            <p className="m-0">Please login to change the greeting</p>
          </div>
        )}
      </div>
      <Cards />
    </main>
  );
}
