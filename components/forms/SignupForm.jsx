import { useState } from 'react';
import UserService from '@/services/UserService';

const SignupForm = ({ setIsSignUp }) => {
  const [loading, setLoading] = useState(false);

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    await UserService.signupUser(
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword
    );
    setLoading(false);
    setIsSignUp(false);
  };

  const inputClass =
    'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg p-2 block w-full appearance-none leading-normal';

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <label className="text-xs font-bold">
            First Name
            <input
              className={`${inputClass} mt-1.5 `}
              required
              type="text"
              placeholder="John"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </label>
          <label className="text-xs font-bold">
            Last Name
            <input
              className={`${inputClass} mt-1.5 `}
              required
              type="text"
              placeholder="Doe"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </label>
        </div>
        <label className="text-xs font-bold">
          Username
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="text"
            placeholder="johndoe123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="text-xs font-bold">
          Email
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="text"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="text-xs font-bold">
          Password
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="password"
            placeholder="Password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="text-xs font-bold">
          Confirm Password
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="password"
            placeholder="Password123"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <div className="w-full">
          <div className="my-5 w-full relative inline-flex  group ">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              onClick={handleSignUp}
              // onClick={() => signOut({ callbackUrl: '/' })}
              title="Get quote now"
              className="bg-white dark:bg-black text-primary w-full relative inline-flex items-center justify-center px-8 py-3 text-xs font-bold text-white transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      <hr className="border-b dark:border-gray-900 border-gray-300 mb-8" />

      <p className="text-xs text-primary font-xs text-center">
        Already have an NFL Last Longer account?{' '}
        <button
          onClick={() => {
            setIsSignUp(false);
          }}
          className="text-blue-500"
        >
          Sign in now
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
