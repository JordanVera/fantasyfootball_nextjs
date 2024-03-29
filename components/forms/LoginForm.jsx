import { useState } from 'react';
import { signIn } from 'next-auth/react';
import GithubSignupButton from '../buttons/GithubSignupButton';
import FacebookSignupButton from '../buttons/FacebookSignupButton';
import GoogleSignupButton from '../buttons/GoogleSignupButton';
import { Input, Button } from '@material-tailwind/react';

const LoginForm = ({ setIsSignUp }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      identifier,
      password,
      // callbackUrl: `/dashboard`,
    });

    console.log({ identifier, password });

    if (!result) {
      console.error('Sign in failed');
      return;
    }

    if (result.error) {
      console.error(result.error);
    }

    console.log('sucessfully signed in');
  };

  return (
    <>
      <Input
        color="blue"
        variant="standard"
        type="text"
        size="md"
        className="text-primary"
        placeholder="Email or Username"
        label="Email or Username"
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <Input
        color="blue"
        variant="standard"
        type="password"
        size="md"
        className="text-primary"
        placeholder="Password"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        color="blue"
        size="sm"
        className="capitalize"
        onClick={handleSignIn}
      >
        Sign in
      </Button>
      <Button
        color="orange"
        size="sm"
        className="capitalize"
        onClick={() => setIsSignUp(true)}
      >
        Sign Up
      </Button>

      <div className="flex items-center">
        <hr className="flex-grow border-gray-800" />
        <span className="px-2 text-gray-800">or</span>
        <hr className="flex-grow border-gray-800" />
      </div>
      <GithubSignupButton />
      <FacebookSignupButton />
      <GoogleSignupButton />
    </>
  );
};
export default LoginForm;
