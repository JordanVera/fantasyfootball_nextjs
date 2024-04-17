import { signOut } from 'next-auth/react';

const SignoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="glow-on-hover px-10 bg-black dark:bg-gray-900 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full  text-xs font-semibold leading-6  text-white inline-block"
    >
      <p className="text-black dark:text-white">Signout</p>
    </button>
  );
};
export default SignoutButton;
