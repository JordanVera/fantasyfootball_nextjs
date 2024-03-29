import Link from 'next/link';
import TeamSlider from '../homepage/TeamSlider';
import { HomeIcon } from '@heroicons/react/24/outline';

const HomepageHero = () => {
  const teamLogos1 = [
    '/images/teamLogos/bears.png',
    '/images/teamLogos/bengals.png',
    '/images/teamLogos/bills.png',
    '/images/teamLogos/broncos.png',
    '/images/teamLogos/buccs.png',
    '/images/teamLogos/cardinals.png',
    '/images/teamLogos/chargers.png',
    '/images/teamLogos/chiefs.png',
    '/images/teamLogos/cleveland.png',
    '/images/teamLogos/colts.png',
    '/images/teamLogos/dallas.png',
    '/images/teamLogos/dolphins.png',
    '/images/teamLogos/eagles.png',
    '/images/teamLogos/falcons.png',
    '/images/teamLogos/footballTeam.png',
    '/images/teamLogos/giants.png',
    '/images/teamLogos/jaguars.png',
    '/images/teamLogos/jets.png',
    '/images/teamLogos/lions.png',
    '/images/teamLogos/niners.png',
  ];

  const teamLogos2 = [
    '/images/teamLogos/giants.png',
    '/images/teamLogos/jaguars.png',
    '/images/teamLogos/jets.png',
    '/images/teamLogos/lions.png',
    '/images/teamLogos/niners.png',
    '/images/teamLogos/packers.png',
    '/images/teamLogos/panthers.png',
    '/images/teamLogos/patriots.png',
    '/images/teamLogos/raiders.png',
    '/images/teamLogos/rams.png',
    '/images/teamLogos/ravens.png',
    '/images/teamLogos/saints.png',
    '/images/teamLogos/seahawks.png',
    '/images/teamLogos/steelers.png',
    '/images/teamLogos/texans.png',
    '/images/teamLogos/titans.png',
    '/images/teamLogos/vikings.png',
  ];

  return (
    <div>
      <div className="flex flex-col gap-20 items-center justify-center h-screen">
        <div className="max-w-[900px] flex flex-col gap-10">
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-black dark:text-white font-bold inter-var text-center">
            Welcome to NFL Last Longer
          </h1>
          <p className="text-base md:text-lg mt-4 text-black dark:text-white font-normal inter-var text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            nemo repellendus eius quod! Molestiae, possimus? Quisquam, fuga
            omnis provident neque voluptatum sed eum. Obcaecati, iusto?
          </p>

          <Link href="/login">
            <button className=" w-72  h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 flex flex-row gap-5 mx-auto">
              <HomeIcon className="h-6 w-6" />
              Create an Account Now
            </button>
          </Link>
        </div>
        <div className="w-full overflow-hidden">
          <TeamSlider direction="left" teamLogos={teamLogos1} />
          <TeamSlider direction="right" teamLogos={teamLogos2} />
        </div>
      </div>
    </div>
  );
};
export default HomepageHero;
