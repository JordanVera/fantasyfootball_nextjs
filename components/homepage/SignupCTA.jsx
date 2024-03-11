import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

const SignupCTA = () => {
  return (
    <div className="max-w-[1200px] mx-auto rounded-xl border-2 border-blue-800 relative">
      <img
        src="/images/billsStadium.jpg"
        alt=""
        className="brightness-75 h-96 w-full object-cover rounded-xl"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5">
        <h2 className="font-bold text-5xl">Sign Up</h2>
        <h4 className="text-md text-gray-500">
          Create an account now, before sign up is over. Our last longer stops
          taking entries one day before the NFL season begins. Sign up now to
          get started and get in on the action!
        </h4>
        <Link href="/login">
          <Button color="blue" className="capitalize">
            Sign Up Now
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default SignupCTA;
