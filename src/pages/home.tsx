import NearLogo from '@/assets/near-logo.svg';
import NextLogo from '@/assets/react.svg';
import { Cards } from '@/components/cards';

const Home = () => {
  return (
    <main className="flex bg-red-500 min-h-screen flex-col items-center justify-between px-6 py-24 md:px-24">
      <div className="flex flex-col text-center text-red-500 justify-center items-center text-sm max-w-[1100px] w-full z-10">
        hello i think we are talking
      </div>

      <div className="relative flex w-full justify-center items-center py-16">
        <img
          className=""
          src={NearLogo}
          alt="NEAR Logo"
          width={110 * 1.5}
          height={28 * 1.5}
        />
        <h3 className="ml-2 mr-3 text-gray-900"> + </h3>
        <img
          className="relative"
          src={NextLogo}
          alt="React Logo"
          width={300 * 0.58}
          height={61 * 0.58}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <div className="absolute left-[-400px] h-[360px] w-[480px] rounded-full bg-secondary-glow blur-[45px] opacity-30" />
          <div className="absolute h-[180px] w-[240px] rounded-full bg-primary-glow opacity-30" />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-4 p-[1rem_1.2rem] md:grid-cols-2 lg:grid-cols-2">
        <Cards />
      </div>
    </main>
  );
};

export default Home;
