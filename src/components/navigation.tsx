import { Link } from '@tanstack/react-router';
import NearLogo from '@/assets/near-logo.svg';
import { authClient } from '@/lib/auth-client';
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [session, setSession] = useState<any>(null);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  const refreshSession = async () => {
    setIsLoadingSession(true);
    try {
      const result = await authClient.getSession();
      setSession(result.data);
    } catch (error) {
      console.error('Failed to fetch session:', error);
    } finally {
      setIsLoadingSession(false);
    }
  };

  useEffect(() => {
    // Get initial session and account ID
    refreshSession();
    setAccountId(authClient.near.getAccountId());

    // Subscribe to session changes
    const unsub = authClient.useSession.subscribe((s) => {
      setSession(s.data);
    });
    return unsub;
  }, []);

  const handleWalletConnect = async () => {
    setIsConnectingWallet(true);
    try {
      await authClient.requestSignIn.near(
        { recipient: "near-starter-kit.pages.dev" },
        {
          onSuccess: () => {
            setIsConnectingWallet(false);
            setAccountId(authClient.near.getAccountId());
          },
          onError: (error) => {
            setIsConnectingWallet(false);
            console.error('Wallet connection failed:', error.message);
          },
        }
      );
    } catch (error) {
      setIsConnectingWallet(false);
      console.error('Wallet connection error:', error);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await authClient.signIn.near(
        { recipient: "near-starter-kit.pages.dev" },
        {
          onSuccess: async () => {
            // Refresh session after successful sign-in
            await refreshSession();
            setIsSigningIn(false);
          },
          onError: (error) => {
            setIsSigningIn(false);
            console.error('Sign in failed:', error.message);
          },
        }
      );
    } catch (error) {
      setIsSigningIn(false);
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    setSession(null);
    setAccountId(null);
  };

  const getButtonLabel = () => {
    if (isLoadingSession) return 'Loading...';
    if (isConnectingWallet) return 'Connecting...';
    if (isSigningIn) return 'Signing in...';
    if (session) return 'Sign out';
    if (accountId) return `Sign in with ${accountId}`;
    return 'Connect Wallet';
  };

  const handleAction = () => {
    if (session) {
      handleSignOut();
    } else if (accountId) {
      handleSignIn();
    } else {
      handleWalletConnect();
    }
  };

  return (
    <nav className="flex w-full items-center justify-between px-6 py-4">
      <div className="flex w-full items-center">
        <Link to="/">
          <img
            src={NearLogo}
            alt="NEAR"
            width={30}
            height={24}
            className="relative dark:invert dark:drop-shadow-[0_0_0.3rem_rgba(255,255,255,0.7)]"
          />
        </Link>
        <div className="ml-auto flex items-center gap-3 pt-1">
          <button
            type="button"
            className="rounded bg-[rgb(0,192,139)] px-4 py-2 text-white transition-colors hover:bg-[rgb(0,169,125)] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAction}
            disabled={isConnectingWallet || isSigningIn || isLoadingSession}
          >
            {getButtonLabel()}
          </button>
        </div>
      </div>
    </nav>
  );
};
