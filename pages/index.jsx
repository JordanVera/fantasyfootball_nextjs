'use client';
import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { HomepageHero } from '@/components/heros/HomepageHero';
import FourStepProcess from '@/components/homepage/FourStepProcess';
import { useEffect, useState } from 'react';

export default function Home() {
  // useEffect(() => {
  //   console.log('bi');
  //   console.log(process.env.NEXT_PUBLIC_BUYIN);
  // }, []);

  return (
    <main>
      <HomepageHero />

      <FourStepProcess />
      {/* <SignupCTA /> */}
      <div className="m-5">
        <WhatWeDo />
      </div>
    </main>
  );
}
