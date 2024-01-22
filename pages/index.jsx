import { useState } from 'react';
import { Inter } from 'next/font/google';
import LoginCard from '@/components/LoginCard';
import SignupCard from '@/components/SignupCard';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [onboarding, setOnboarding] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState('login');

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-[#121212]`}
    >
      {loginOrSignup === 'login' && (
        <LoginCard
          setOnboarding={setOnboarding}
          setLoginOrSignup={setLoginOrSignup}
        />
      )}
      {loginOrSignup === 'signup' && (
        <SignupCard setOnboarding={setOnboarding} />
      )}
    </main>
  );
}
