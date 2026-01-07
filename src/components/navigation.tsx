import { Link } from 'react-router';
import NearLogo from '@/assets/near-logo.svg';
import { useNearWallet } from 'near-connect-hooks';

export const Navigation = () => {
  const { signedAccountId, loading, signIn, signOut } = useNearWallet();

  const handleAction = () => {
    if (signedAccountId) {
      signOut();
    } else {
      signIn();
    }
  };

  const label = loading
    ? 'Loading...'
    : signedAccountId
      ? `Logout ${signedAccountId}`
      : 'Login';

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
        <div className="ml-auto flex items-center pt-1">
          <button
            className="rounded bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
            onClick={handleAction}
          >
            {label}
          </button>
        </div>
      </div>
    </nav>
  );
};
