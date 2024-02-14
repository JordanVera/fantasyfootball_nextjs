import { useState } from 'react';
import { Inter } from 'next/font/google';
import LoginCard from '@/components/LoginCard';
import SignupCard from '@/components/SignupCard';
const inter = Inter({ subsets: ['latin'] });

export default function PaymentSuccess() {
  const [onboarding, setOnboarding] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState('login');

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-[#121212]`}
    >
      <h1>Payment Success</h1>
    </main>
  );
}
