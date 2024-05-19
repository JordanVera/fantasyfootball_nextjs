import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import GithubSignupButton from '../buttons/GithubSignupButton';
import FacebookSignupButton from '../buttons/FacebookSignupButton';
import GoogleSignupButton from '../buttons/GoogleSignupButton';
import { Input, Button } from '@material-tailwind/react';

const LoginForm = ({ setIsSignUp }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log('Session status:', status);
    console.log('Session data:', session);
    if (status === 'authenticated') {
      console.log('User is authenticated:', session);
      // Redirect to dashboard or any other page
      window.location.href = '/dashboard';
    } else {
      console.log('User is not authenticated');
    }
  }, [status, session]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    const result = await signIn('credentials', {
      redirect: false,
      identifier,
      password,
    });

    console.log('SignIn result:', result);

    if (result.error) {
      setError(result.error);
      console.error('SignIn error:', result.error);
      return;
    }

    if (result.ok) {
      console.log('Successfully signed in');
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <Input
          color="blue"
          variant="standard"
          type="text"
          size="md"
          className="text-primary"
          placeholder="Email or Username"
          label="Email or Username"
          value={identifier}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button color="blue" size="sm" className="capitalize" type="submit">
          Sign in
        </Button>
      </form>
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
