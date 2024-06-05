import { useState } from 'react';
import UserService from '@/services/UserService';
import { toast } from 'react-toastify';
import { useTheme } from '@/context/ThemeContext';

const SignupForm = ({ setIsSignUp }) => {
  const [loading, setLoading] = useState(false);

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { theme } = useTheme();

  const handleSignUp = async () => {
    setLoading(true);

    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (
      !username ||
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber
    ) {
      return toast.error('missing or invalid required fields.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
    }

    if (!phoneRegex.test(phoneNumber)) {
      return toast.error('Please enter a valid phone number.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
    }

    if (password !== confirmPassword) {
      return toast.error('Your passwords dont match.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
    }

    try {
      await UserService.signupUser(
        firstname,
        lastname,
        username,
        email,
        password,
        confirmPassword,
        phoneNumber
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsSignUp(false);
    }
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
          Phone Number
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="tel"
            placeholder="1234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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

        <div className="relative group w-full mt-3 mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button
            onClick={handleSignUp}
            className="relative px-7 py-4 bg-white dark:bg-black text-primary rounded-xl leading-none flex items-center divide-x divide-gray-600 w-full  justify-center text-xs font-bold"
          >
            Sign up
          </button>
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
