import { Input, Button, Avatar } from '@material-tailwind/react';
import GithubSignupButton from '@/components/buttons/GithubSignupButton';
const SignupCard = ({ onBoarding, setOnboarding }) => {
  return (
    <div className="rounded-xl p-5 border-2 border-gray-900">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <Avatar
          src="/media/selfie2.png"
          alt="avatar"
          size="xl"
          className="mx-auto bg-gray-700"
        />
        <div className="flex flex-row space-x-5">
          <Input label="First Name" color="white" />
          <Input label="Last Name" color="white" />
        </div>
        <Input label="Username" color="white" />
        <Input label="Email" color="white" type="email" />
        <Input label="Password" color="white" type="password" />
        <Input label="Confirm Password" color="white" type="password" />
        <Button
          variant="gradient"
          color="black"
          size="sm"
          className="w-full capitalize"
        >
          Submit
        </Button>
        <GithubSignupButton />
      </div>
    </div>
  );
};
export default SignupCard;
