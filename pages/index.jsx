import { useState } from 'react';
import { Inter } from 'next/font/google';
import HomepageHero from '@/components/heros/HomepageHero';
import TeamSlider from '@/components/homepage/TeamSlider';
import Cards from '@/components/homepage/Cards';
import WhatWeDo from '@/components/homepage/WhatWeDo';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <HomepageHero />

      <div className="mx-auto">
        <WhatWeDo />
        <Cards />
      </div>
    </main>
  );
}
