import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const LoginForm = ({ setIsSignUp }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    // console.log('Session status:', status);
    // console.log('Session data:', session);
    if (status === 'authenticated') {
      // console.log('User is authenticated:', session);
      // Redirect to dashboard or any other page
      router.push('/dashboard');
    } else {
      // console.log('User is not authenticated');
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
    'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg p-2 block w-full appearance-none leading-normal';

  return (
    <>
      <form onSubmit={handleSignIn} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-primary text-xs font-bold">
            Email or Username
          </label>
          <input
            id="email"
            className={`text-primary ${inputClass}`}
            type="text"
            placeholder="Email or Username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-primary text-xs font-bold">
            Password
          </label>
          <input
            id="password"
            className={`text-primary ${inputClass}`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="relative group w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-7 py-4 bg-black rounded-xl leading-none flex items-center divide-x divide-gray-600 w-full  justify-center text-sm font-bold">
            Sign in
          </button>
        </div>
      </form>

      <hr className="border-b dark:border-gray-900 border-gray-300 my-8" />

      <p className="text-xs text-primary font-xs text-center">
        Don't have an NFL Last Longer account?{' '}
        <button onClick={() => setIsSignUp(true)} className="text-blue-500">
          Sign up now
        </button>
      </p>
    </>
  );
};

export default LoginForm;
