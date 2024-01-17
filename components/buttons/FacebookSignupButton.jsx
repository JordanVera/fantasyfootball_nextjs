import { signIn } from 'next-auth/react';
import { Button } from '@material-tailwind/react';

const FacebookSignupButton = () => {
  return (
    <Button
      onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
      size="sm"
      className="bg-gradient-to-b from-blue-700 to-blue-900 group relative flex items-center gap-3 overflow-hidden px-3 py-3 capitalize"
    >
      Sign in with Facebook
      <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-500 transition-colors ">
        <img
          src="/icons/facebook.png"
          alt="faecbook icon"
          className="h-6 w-6"
        />
      </span>
    </Button>
  );
};
export default FacebookSignupButton;
