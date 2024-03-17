import { useState, useRef } from 'react';

import Image from 'next/image';
import { toast } from 'react-toastify';
import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';

const LoginCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-96 rounded-xl p-5 border-2 border-gray-800">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <Image
          src={'/images/logo.png'}
          height={150}
          width={150}
          alt="Main Logo"
          className="mx-auto"
        />
        {isSignUp ? (
          // onSubmit={handleSignUp}
          <SignupForm setIsSignUp={setIsSignUp} />
        ) : (
          <LoginForm setIsSignUp={setIsSignUp} />
        )}
      </div>
    </div>
  );
};
export default LoginCard;
