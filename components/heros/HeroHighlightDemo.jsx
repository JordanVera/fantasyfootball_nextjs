'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import TeamSlider from '../homepage/TeamSlider';

export function HeroHighlightDemo() {
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
    <HeroHighlight>
      <div className="flex flex-col gap-32">
        <div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Welcome to NFL Last Longer
          </motion.h1>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-3xl lg:text-3xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Highlight className="text-black dark:text-white">
              The best NFL Survivor application
            </Highlight>
          </motion.h2>
        </div>

        {/* <div className="w-full overflow-hidden">
          <TeamSlider direction="left" teamLogos={teamLogos1} />
          <TeamSlider direction="right" teamLogos={teamLogos2} />
        </div> */}
      </div>
    </HeroHighlight>
  );
}
