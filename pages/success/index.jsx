import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PaymentSuccess() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-[#121212]`}
    >
      <h1>Payment Success</h1>
    </main>
  );
}
