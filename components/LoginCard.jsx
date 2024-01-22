import { Input, Button, Avatar } from '@material-tailwind/react';
import GithubSignupButton from './buttons/GithubSignupButton';
import FacebookSignupButton from './buttons/FacebookSignupButton';
import GoogleSignupButton from './buttons/GoogleSignupButton';

const LoginCard = ({ onBoarding, setOnboarding, setLoginOrSignup }) => {
  return (
    <div className="w-96 h-96 rounded-xl p-5 border-2 border-gray-800">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <Avatar
          src="/media/selfie2.png"
          alt="avatar"
          size="xl"
          className="mx-auto bg-gray-700"
        />

        <GithubSignupButton />
        <FacebookSignupButton />
        <GoogleSignupButton />
      </div>
    </div>
  );
};
export default LoginCard;
