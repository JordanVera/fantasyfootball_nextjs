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
    'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal';

  return (
    <div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className={`${inputClass}`}
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <input
            className={`${inputClass}`}
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        <input
          className={`${inputClass}`}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`${inputClass}`}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${inputClass}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={`${inputClass} mb-10`}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="w-full">
          <div className="mt-5 w-full relative inline-flex  group ">
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

      <hr className="border-b dark:border-gray-900 border-gray-300 my-10" />

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
