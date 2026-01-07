import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { WalletType } from '@hot-labs/kit';
import { hotConnector } from '@/lib/connector';

// Query keys for consistency and easy cache management
export const walletKeys = {
  all: ['wallet'] as const,
  near: () => [...walletKeys.all, 'near'] as const,
  nearAddress: () => [...walletKeys.near(), 'address'] as const,
  nearBalance: (address: string) =>
    [...walletKeys.near(), 'balance', address] as const,
} as const;

// Type definitions
export interface WalletState {
  nearWallet: any | null;
  signedAccountId: string | null;
  loading: boolean;
  isError: boolean;
  error: Error | null;
}

export interface WalletActions {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

// Custom hook to get wallet state
export const useNearWallet = (): WalletState & WalletActions => {
  const queryClient = useQueryClient();

  // Query for wallet connection state
  const { data: nearWallet, isLoading } = useQuery({
    queryKey: walletKeys.near(),
    queryFn: () => hotConnector.near,
    staleTime: 0, // Always check latest state
    refetchInterval: false, // Don't poll, rely on events
  });

  // Query for signed account ID
  const { data: signedAccountId } = useQuery({
    queryKey: walletKeys.nearAddress(),
    queryFn: () => hotConnector.near?.address || null,
    staleTime: 0,
  });

  // Mutation to connect wallet
  const connectMutation = useMutation({
    mutationFn: async () => {
      await hotConnector.connect(WalletType.NEAR);
    },
    onSuccess: () => {
      // Invalidate wallet queries to trigger refetch
      queryClient.invalidateQueries({ queryKey: walletKeys.near() });
      queryClient.invalidateQueries({ queryKey: walletKeys.nearAddress() });
    },
    onError: (error) => {
      console.error('Connection failed:', error);
    },
  });

  // Mutation to disconnect wallet
  const disconnectMutation = useMutation({
    mutationFn: async () => {
      await hotConnector.disconnect(WalletType.NEAR);
    },
    onSuccess: () => {
      // Invalidate wallet queries to trigger refetch
      queryClient.invalidateQueries({ queryKey: walletKeys.near() });
      queryClient.invalidateQueries({ queryKey: walletKeys.nearAddress() });
    },
    onError: (error) => {
      console.error('Disconnection failed:', error);
    },
  });

  const loading =
    isLoading || connectMutation.isPending || disconnectMutation.isPending;

  return {
    nearWallet: nearWallet ?? null,
    signedAccountId: signedAccountId ?? null,
    loading,
    isError: connectMutation.isError || disconnectMutation.isError,
    error: (connectMutation.error || disconnectMutation.error) as Error | null,
    connect: connectMutation.mutateAsync,
    disconnect: disconnectMutation.mutateAsync,
  };
};

// Hook to get wallet balance
export const useWalletBalance = (address: string | null) => {
  const { nearWallet } = useNearWallet();

  return useQuery({
    queryKey: walletKeys.nearBalance(address || ''),
    queryFn: async () => {
      if (!address || !nearWallet) return null;
      // Fetch balance using wallet
      const balance = await nearWallet.fetchBalance(1313161554, 'wrap.near');
      return balance;
    },
    enabled: !!address && !!nearWallet,
    staleTime: 1000 * 30, // 30 seconds
    refetchInterval: 1000 * 60, // Refetch every minute
  });
};

// Hook to set up wallet event listeners
export const useWalletEvents = () => {
  const queryClient = useQueryClient();

  useQuery({
    queryKey: ['wallet-events'],
    queryFn: () => {
      // Subscribe to connection events
      const unsubscribeConnect = hotConnector.onConnect(() => {
        queryClient.invalidateQueries({ queryKey: walletKeys.near() });
        queryClient.invalidateQueries({ queryKey: walletKeys.nearAddress() });
      });

      const unsubscribeDisconnect = hotConnector.onDisconnect(() => {
        queryClient.invalidateQueries({ queryKey: walletKeys.near() });
        queryClient.invalidateQueries({ queryKey: walletKeys.nearAddress() });
      });

      // Return cleanup function
      return () => {
        unsubscribeConnect();
        unsubscribeDisconnect();
      };
    },
    staleTime: Infinity, // Never refetch this query
  });
};

// Utility hook to check if wallet is connected
export const useIsWalletConnected = (): boolean => {
  const { signedAccountId } = useNearWallet();
  return !!signedAccountId;
};

// Utility hook to get wallet connection status
export const useWalletStatus = (): {
  isConnected: boolean;
  isLoading: boolean;
  isError: boolean;
} => {
  const { loading, signedAccountId, isError } = useNearWallet();

  return {
    isConnected: !!signedAccountId,
    isLoading: loading,
    isError,
  };
};

// Re-export hotConnector for components that need it
export { hotConnector } from '@/lib/connector';
