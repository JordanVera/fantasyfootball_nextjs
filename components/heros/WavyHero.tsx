'use client';
import React from 'react';
import { WavyBackground } from '../ui/wavy-background';
import { useTheme } from '@/context/ThemeContext';

export function WavyHero() {
  const { theme } = useTheme();
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40"
      backgroundFill={theme === 'light' ? '#fff' : '#000'}
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-black dark:text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-black dark:text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
