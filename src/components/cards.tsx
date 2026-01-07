import { Link } from 'react-router';

export const Cards = () => {
  return (
    <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-4 p-[1.5rem_2rem] text-center md:text-left md:grid-cols-2 lg:grid-cols-2">
      <a
        href="https://docs.near.org/build/web3-apps/quickstart"
        className="group inline-flex flex-col rounded-[12px] border border-[rgb(var(--card-border-rgb))] bg-[rgb(var(--card-rgb))] p-[1.5rem_2rem] transition-all duration-300 hover:border-[rgb(0,192,139)] hover:shadow-lg hover:shadow-[rgb(0,192,139,0.15)] md:p-[1.5rem_2rem]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-[0.8rem] text-xl font-semibold md:mb-[0.8rem]">
          NEAR Documentation{' '}
          <span className="inline-block text-[rgb(0,192,139)] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </h2>
        <p className="max-w-[35ch] text-[0.95rem] leading-[1.6] text-[rgb(var(--foreground-rgb))]/70 md:max-w-[35ch]">
          Learn how this application works, and what you can build on NEAR
          Protocol.
        </p>
      </a>

      <a
        href="https://github.com/hot-dao/hot-connector"
        className="group inline-flex flex-col rounded-[12px] border border-[rgb(var(--card-border-rgb))] bg-[rgb(var(--card-rgb))] p-[1.5rem_2rem] transition-all duration-300 hover:border-[rgb(0,192,139)] hover:shadow-lg hover:shadow-[rgb(0,192,139,0.15)] md:p-[1.5rem_2rem]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-[0.8rem] text-xl font-semibold md:mb-[0.8rem]">
          Hot Connector{' '}
          <span className="inline-block text-[rgb(0,192,139)] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </h2>
        <p className="max-w-[35ch] text-[0.95rem] leading-[1.6] text-[rgb(var(--foreground-rgb))]/70 md:max-w-[35ch]">
          Seamless wallet connection and smart contract interactions with
          <span className="font-semibold text-[rgb(0,192,139)]">
            {' '}
            hot-connector
          </span>
          .
        </p>
      </a>

      <a
        href="https://tanstack.com/query/latest/docs/react/overview"
        className="group inline-flex flex-col rounded-[12px] border border-[rgb(var(--card-border-rgb))] bg-[rgb(var(--card-rgb))] p-[1.5rem_2rem] transition-all duration-300 hover:border-[rgb(0,192,139)] hover:shadow-lg hover:shadow-[rgb(0,192,139,0.15)] md:p-[1.5rem_2rem]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-[0.8rem] text-xl font-semibold md:mb-[0.8rem]">
          TanStack Query{' '}
          <span className="inline-block text-[rgb(0,192,139)] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </h2>
        <p className="max-w-[35ch] text-[0.95rem] leading-[1.6] text-[rgb(var(--foreground-rgb))]/70 md:max-w-[35ch]">
          Powerful data fetching, caching, and synchronization with
          <span className="font-semibold text-[rgb(0,192,139)]">
            {' '}
            @tanstack/react-query
          </span>
          .
        </p>
      </a>

      <a
        href="https://github.com/near/near-workspaces-js"
        className="group inline-flex flex-col rounded-[12px] border border-[rgb(var(--card-border-rgb))] bg-[rgb(var(--card-rgb))] p-[1.5rem_2rem] transition-all duration-300 hover:border-[rgb(0,192,139)] hover:shadow-lg hover:shadow-[rgb(0,192,139,0.15)] md:p-[1.5rem_2rem]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-[0.8rem] text-xl font-semibold md:mb-[0.8rem]">
          NEAR Workspaces JS{' '}
          <span className="inline-block text-[rgb(0,192,139)] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </h2>
        <p className="max-w-[35ch] text-[0.95rem] leading-[1.6] text-[rgb(var(--foreground-rgb))]/70 md:max-w-[35ch]">
          Test your smart contracts in sandboxed environments with{' '}
          <span className="font-semibold text-[rgb(0,192,139)]">
            near-workspaces-js
          </span>
          .
        </p>
      </a>
    </div>
  );
};
