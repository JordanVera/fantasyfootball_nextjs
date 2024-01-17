import { signIn } from 'next-auth/react';
import { Button } from '@material-tailwind/react';

function GithubSignupButton() {
  return (
    <Button
      size="sm"
      className="bg-gradient-to-b from-gray-900 to-black group relative flex items-center gap-3 overflow-hidden px-3 py-3 capitalize"
      onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
    >
      Sign in with Github
      <span className="absolute right-0 grid h-full w-12 place-items-center bg-gray transition-colors ">
        <img
          src="/icons/github-mark-white.svg"
          alt="github icon"
          className="h-6 w-6"
        />
      </span>
    </Button>
  );
}

export default GithubSignupButton;
