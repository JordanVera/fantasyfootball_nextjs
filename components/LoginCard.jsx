import { signIn } from 'next-auth/react';
import { useState, useRef } from 'react';
import { Input, Button, Avatar } from '@material-tailwind/react';
import GithubSignupButton from './buttons/GithubSignupButton';
import FacebookSignupButton from './buttons/FacebookSignupButton';
import GoogleSignupButton from './buttons/GoogleSignupButton';
import Image from 'next/image';

const LoginCard = ({ onBoarding, setOnboarding, setLoginOrSignup }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    setLoading(true);

    // Add validation here (e.g., check if password and confirmPassword are the same)

    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setLoading(false);

    if (response.ok) {
      // Sign-up was successful. You can redirect the user to the sign-in page here.
    } else {
      // Sign-up failed. You can show an error message here.
    }
  };

  return (
    <div className="w-96 rounded-xl p-5 border-2 border-gray-800">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <Image
          src={'/images/logo.png'}
          height={150}
          width={150}
          alt="Main Logo"
          className="mx-auto"
        />
        {isSignUp ? (
          // onSubmit={handleSignUp}
          <form
            className="flex flex-col gap-3"
            onClick={handleSignUp}
            ref={formRef}
          >
            <Input
              color="blue"
              variant="standard"
              type="text"
              size="regular"
              className="text-primary"
              placeholder="First Name"
              label="First Name"
              onChange={(e) => setfirstname(e.target.value)}
            />
            <Input
              color="blue"
              variant="standard"
              type="text"
              size="regular"
              className="text-primary"
              placeholder="Last Name"
              label="Last Name"
              onChange={(e) => setlastname(e.target.value)}
            />
            <Input
              color="blue"
              variant="standard"
              type="text"
              className="text-primary"
              size="regular"
              placeholder="Username"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              color="blue"
              variant="standard"
              type="text"
              size="regular"
              className="text-primary"
              placeholder="Email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              color="blue"
              variant="standard"
              type="password"
              size="regular"
              className="text-primary"
              placeholder="Password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              color="blue"
              variant="standard"
              type="password"
              className="text-primary"
              size="regular"
              placeholder="Confirm Password"
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              color="blue"
              buttonType="filled"
              size="sm"
              className="mt-5"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        ) : (
          <>
            <Button
              color="blue"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              onClick={() =>
                signIn('credentials', { callbackUrl: '/dashboard' })
              }
            >
              Sign in
            </Button>
            <Button
              color="orange"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </Button>
            <hr className="border-gray-800" />
            <GithubSignupButton />
            <FacebookSignupButton />
            <GoogleSignupButton />
          </>
        )}
      </div>
    </div>
  );
};
export default LoginCard;
