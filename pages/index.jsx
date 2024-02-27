import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Hero } from '@/components/heros/Hero';
import { BentoGridThirdDemo } from '@/components/Grid';
import { WavyHero } from '@/components/heros/WavyHero';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} `}
    >
      <WavyHero />

      {/* <BentoGridThirdDemo /> */}

      <div className="text-5xl text-white">hello world</div>
    </main>
  );
}
