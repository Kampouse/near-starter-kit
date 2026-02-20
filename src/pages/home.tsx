import NearLogo from '@/assets/near-logo.svg';
import ReactLogo from '@/assets/react.svg';
import { Cards } from '@/components/cards';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-24 md:px-24">
      <div className="flex flex-col items-center justify-center text-center max-w-[1100px] w-full z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--foreground-rgb))] to-[rgb(var(--foreground-rgb))]/70 bg-clip-text text-transparent">
          NEAR Protocol Starter Kit
        </h1>
        <p className="text-lg md:text-xl text-[rgb(var(--foreground-rgb))]/80 max-w-2xl leading-relaxed mb-6">
          A modern, production-ready template for building Web3 applications on
          the NEAR blockchain. Powered by{' '}
          <span className="font-bold text-[rgb(0,192,139)]">Hot Labs</span> and{' '}
          <span className="font-bold text-[rgb(0,192,139)]">
            TanStack Query
          </span>
          .
        </p>
        <a
          href="https://github.com/Kampouse/near-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[rgb(0,192,139)] text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-[rgb(0,169,125)]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View Source on GitHub
          <span>→</span>
        </a>
      </div>

      <div className="relative flex w-full justify-center items-center py-16">
        <img
          className="dark:invert"
          src={NearLogo}
          alt="NEAR Logo"
          width={110 * 1.5}
          height={28 * 1.5}
        />
        <h3 className="ml-4 mr-4 text-3xl font-bold text-[rgb(var(--foreground-rgb))]">
          +
        </h3>
        <img
          className="relative"
          src={ReactLogo}
          alt="React Logo"
          width={300 * 0.58}
          height={61 * 0.58}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <div className="absolute left-[-300px] h-[300px] w-[400px] rounded-full bg-secondary-glow blur-[60px] opacity-20" />
          <div className="absolute right-[-300px] h-[200px] w-[300px] rounded-full bg-primary-glow blur-[60px] opacity-20" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1100px]">
        <Cards />
      </div>

      {/* better-near-auth Section */}
      <div className="mt-16 mx-auto w-full max-w-[1100px]">
        <div className="bg-[rgb(var(--card-rgb))] border border-[rgb(var(--card-border-rgb))] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--foreground-rgb))]">
            🔐 Authentication with better-near-auth
          </h2>
          <p className="text-[rgb(var(--foreground-rgb))]/80 mb-4 leading-relaxed">
            This starter kit uses{' '}
            <span className="font-semibold text-[rgb(0,192,139)]">better-near-auth</span>
            , a powerful authentication library that provides seamless NEAR wallet
            integration with modern auth standards.
          </p>
          <ul className="space-y-2 text-[rgb(var(--foreground-rgb))]/70 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>NEAR wallet signing via fast-auth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Session management with Better Auth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Type-safe client and server utilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Multi-network support (testnet/mainnet)</span>
            </li>
          </ul>
          <a
            href="https://github.com/elliotBraem/better-near-auth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(0,192,139)] text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-[rgb(0,169,125)]"
          >
            View better-near-auth on GitHub
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Deployment Instructions */}
      <div className="mt-16 mx-auto w-full max-w-[1100px]">
        <div className="bg-[rgb(var(--card-rgb))] border border-[rgb(var(--card-border-rgb))] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--foreground-rgb))]">
            🚀 Deploy to Cloudflare Pages
          </h2>
          <div className="space-y-4">
            <div className="bg-[rgb(var(--callout-rgb))] rounded-lg p-4 border border-[rgb(var(--callout-border-rgb))]">
              <h3 className="font-semibold mb-2 text-[rgb(var(--foreground-rgb))]">
                1. Build Your App
              </h3>
              <code className="block bg-black/20 px-4 py-2 rounded text-sm text-[rgb(0,192,139)]">
                npm run build
              </code>
            </div>

            <div className="bg-[rgb(var(--callout-rgb))] rounded-lg p-4 border border-[rgb(var(--callout-border-rgb))]">
              <h3 className="font-semibold mb-2 text-[rgb(var(--foreground-rgb))]">
                2. Deploy to Cloudflare Pages
              </h3>
              <code className="block bg-black/20 px-4 py-2 rounded text-sm text-[rgb(0,192,139)]">
                npm run deploy
              </code>
              <p className="mt-2 text-sm text-[rgb(var(--foreground-rgb))]/60">
                This will deploy the ./dist folder to Cloudflare Pages using
                Wrangler
              </p>
            </div>

            <div className="bg-[rgb(var(--callout-rgb))] rounded-lg p-4 border border-[rgb(var(--callout-border-rgb))]">
              <h3 className="font-semibold mb-2 text-[rgb(var(--foreground-rgb))]">
                3. Local Preview
              </h3>
              <code className="block bg-black/20 px-4 py-2 rounded text-sm text-[rgb(0,192,139)]">
                npm run cf-dev
              </code>
              <p className="mt-2 text-sm text-[rgb(var(--foreground-rgb))]/60">
                Preview your build locally before deploying
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEAR Workspaces JS Section */}
      <div className="mt-16 mx-auto w-full max-w-[1100px]">
        <div className="bg-[rgb(var(--card-rgb))] border border-[rgb(var(--card-border-rgb))] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--foreground-rgb))]">
            🧪 NEAR Workspaces JS
          </h2>
          <p className="text-[rgb(var(--foreground-rgb))]/80 mb-4 leading-relaxed">
            Test your smart contracts in sandboxed environments with{' '}
            <span className="font-semibold text-[rgb(0,192,139)]">
              near-workspaces-js
            </span>
            . This library provides a testing framework for NEAR smart
            contracts, allowing you to:
          </p>
          <ul className="space-y-2 text-[rgb(var(--foreground-rgb))]/70 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Run tests in isolated sandboxed environments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Mock accounts and contract deployments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Fast testing without gas costs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[rgb(0,192,139)] mt-1">✓</span>
              <span>Integration with popular testing frameworks</span>
            </li>
          </ul>
          <a
            href="https://github.com/near/near-workspaces-js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(0,192,139)] text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-[rgb(0,169,125)]"
          >
            View on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
