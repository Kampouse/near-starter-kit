import { Link } from 'react-router';
import NearLogo from '@/assets/near-logo.svg';
import { useNearWallet } from '@/hooks/useNearWallet';

export const Navigation = () => {
  const { signedAccountId, loading, connect, disconnect, isError, error } =
    useNearWallet();

  const handleAction = async () => {
    try {
      if (signedAccountId) {
        await disconnect();
      } else {
        await connect();
      }
    } catch (error) {
      console.error('Wallet action failed:', error);
      // Error is already handled by the mutation in useNearWallet
    }
  };

  const buttonLabel = loading ? 'Loading...' : signedAccountId || 'Login';

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
          {isError && error && (
            <span className="text-sm text-red-400 dark:text-red-300">
              {error instanceof Error ? error.message : 'Wallet error'}
            </span>
          )}
          <button
            type="button"
            className="rounded bg-[rgb(0,192,139)] px-4 py-2 text-white transition-colors hover:bg-[rgb(0,169,125)] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAction}
            disabled={loading}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </nav>
  );
};
