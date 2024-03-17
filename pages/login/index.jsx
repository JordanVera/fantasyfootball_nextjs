import { useState } from 'react';
import { Inter } from 'next/font/google';
import LoginCard from '@/components/LoginCard';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `}
    >
      <LoginCard />
    </main>
  );
}
