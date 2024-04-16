import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { HeroHighlightDemo } from '@/components/heros/HeroHighlightDemo';
import ThreeStepProcess from '@/components/homepage/ThreeStepProcess';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main>
      <HeroHighlightDemo />

      <ThreeStepProcess />
      <SignupCTA />
      <div className="mt-20 m-5">
        <WhatWeDo />
        {/* <TracingBeam children={<Child />} /> */}
      </div>

      {/* <HomepageHero /> */}
      {/* <TracingBeamDemo /> */}
    </main>
  );
}

function Child() {
  return (
    <div className="mx-auto">
      {/* <Cards /> */}
      {/* <SignupCTA /> */}
    </div>
  );
}
