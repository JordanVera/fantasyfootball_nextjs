'use client';
// import SignupCTA from '@/components/homepage/SignupCTA';
import { useState } from 'react';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { HomepageHero } from '@/components/heros/HomepageHero';
import FourStepProcess from '@/components/homepage/FourStepProcess';

export default function Home() {
  return (
    <main>
      <HomepageHero />

      <FourStepProcess />
      {/* <SignupCTA /> */}

      <WhatWeDo />
    </main>
  );
}
