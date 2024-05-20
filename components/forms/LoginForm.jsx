import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import GithubSignupButton from '../buttons/GithubSignupButton';
import FacebookSignupButton from '../buttons/FacebookSignupButton';
import GoogleSignupButton from '../buttons/GoogleSignupButton';
import { Button } from '@material-tailwind/react';

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

  const inputClass =
    'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal';

  return (
    <>
      <form onSubmit={handleSignIn} className="flex flex-col gap-5">
        <input
          className={`text-primary ${inputClass}`}
          type="text"
          placeholder="Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          className={`text-primary ${inputClass}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full">
          <div className="my-5 w-full relative inline-flex  group ">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              title="Get quote now"
              className="bg-white dark:bg-black text-primary w-full relative inline-flex items-center justify-center px-8 py-3 text-xs font-bold text-white transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Signin
            </button>
          </div>
        </div>
      </form>

      <hr className="border-b dark:border-gray-900 border-gray-300 my-8" />

      <p className="text-xs text-primary font-xs text-center">
        Don't have an NFL Last Longer account?{' '}
        <button onClick={() => setIsSignUp(true)} className="text-blue-500">
          Sign up now
        </button>
      </p>
      {/* <div className="flex items-center">
        <hr className="flex-grow border-gray-800" />
        <span className="px-2 text-gray-800">or</span>
        <hr className="flex-grow border-gray-800" />
      </div>
      <GithubSignupButton />
      <FacebookSignupButton />
      <GoogleSignupButton /> */}
    </>
  );
};

export default LoginForm;
