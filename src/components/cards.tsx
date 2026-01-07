import { Link } from 'react-router';

export const Cards = () => {
  return (
    <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-4 p-[1rem_1.2rem] text-center max-w-[320px] md:max-w-[1100px] md:grid-cols-2 md:text-left">
      <a
        href="https://docs.near.org/build/web3-apps/quickstart"
        className="inline-flex flex-col rounded-[12px] border border-transparent p-[1rem_2.5rem] transition-all duration-200 hover:border-[rgba(131,134,135,0.15)] hover:bg-[rgba(180,185,188,0.1)] md:p-[1rem_1.2rem]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-[0.7rem] font-semibold md:mb-[0.7rem]">
          Near Docs{' '}
          <span className="inline-block transition-transform duration-200 hover:translate-x-1 group-hover:translate-x-1">
            -&gt;
          </span>
        </h2>
        <p className="max-w-[30ch] text-[0.9rem] leading-[1.5] opacity-60 md:max-w-[30ch]">
          Learn how this application works, and what you can build on Near.
        </p>
      </a>

      <Link
        to="/hello-near"
        className="inline-flex flex-col rounded-[12px] border border-transparent p-[1rem_2.5rem] transition-all duration-200 hover:border-[rgba(131,134,135,0.15)] hover:bg-[rgba(180,185,188,0.1)] md:p-[1rem_1.2rem]"
        rel="noopener noreferrer"
      >
        <h2 className="mb-[0.7rem] font-semibold md:mb-[0.7rem]">
          Near Integration{' '}
          <span className="inline-block transition-transform duration-200 hover:translate-x-1 group-hover:translate-x-1">
            -&gt;
          </span>
        </h2>
        <p className="max-w-[30ch] text-[0.9rem] leading-[1.5] opacity-60 md:max-w-[30ch]">
          Discover how simple it is to interact with a Near smart contract.
        </p>
      </Link>
    </div>
  );
};
