import HomepageHero from '@/components/heros/HomepageHero';
import Cards from '@/components/homepage/Cards';
import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { TracingBeamDemo } from '@/components/TracingBeamDemo';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { HeroHighlightDemo } from '@/components/heros/HeroHighlightDemo';
import ThreeStepProcess from '@/components/homepage/ThreeStepProcess';
import { useEffect, useState } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export default function Home() {
  // const { scrollDir, scrollPosition } = useDetectScroll();

  // const dir = useScrollDirection();

  // useEffect(() => {
  //   // console.log('sda');
  //   console.log({ scrollDir });
  //   console.log({ scrollPosition });
  // }, [scrollDir, scrollPosition]);

  // useEffect(() => {
  //   console.log({ dir });
  // }, [dir]);

  // useEffect(() => {
  //   console.log({ count });
  // }, [count]);

  return (
    <main>
      <HeroHighlightDemo />

      <ThreeStepProcess />
      <SignupCTA />
      <div className="mt-20 m-5">
        <TracingBeam children={<Child />} />
      </div>

      {/* <HomepageHero /> */}
      {/* <TracingBeamDemo /> */}
    </main>
  );
}

function Child() {
  return (
    <div className="mx-auto">
      <WhatWeDo />
      {/* <Cards /> */}
      {/* <SignupCTA /> */}
    </div>
  );
}
