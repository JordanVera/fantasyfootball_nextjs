import { useState, useRef } from 'react';

import Image from 'next/image';
import { toast } from 'react-toastify';
import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';
import Logo from './Logo';

const LoginCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-96 rounded-xl p-5 border-2 border-gray-300 dark:border-gray-900 ">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <div className="mx-auto">
          <Logo height={150} width={150} />
        </div>
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
