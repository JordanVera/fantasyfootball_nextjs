'use client';
import React from 'react';
import { WavyBackground } from '../ui/wavy-background';
import { useTheme } from '@/context/ThemeContext';

export function WavyHero() {
  const { theme } = useTheme();
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40"
      backgroundFill={theme === 'light' ? '#000' : '#000'}
      containerClassName="h-96 flex flex-col items-center justify-center"
    >
     

      {/* <BentoGridThirdDemo /> */}
    </WavyBackground>
  );
}
