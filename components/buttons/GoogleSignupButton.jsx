import { signIn } from 'next-auth/react';
import { Button } from '@material-tailwind/react';

const GoogleSignupButton = () => {
  return (
    <Button
      size="sm"
      className="bg-gradient-to-b from-white to-gray-200 group text-black relative flex items-center gap-3 overflow-hidden px-3 py-3 capitalize"
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      Sign in with Google
      <span className="absolute right-0 grid h-full w-12 place-items-center bg-gray-300 transition-colors ">
        <img src="/icons/google.png" alt="github icon" className="h-6 w-6" />
      </span>
    </Button>
  );
};
export default GoogleSignupButton;
