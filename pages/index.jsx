import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Hero } from '@/components/heros/Hero';
import { BentoGridThirdDemo } from '@/components/Grid';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} `}
    >
      <Hero />
      <BentoGridThirdDemo />
    </main>
  );
}
