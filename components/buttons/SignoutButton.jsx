import { signOut } from 'next-auth/react';

const SignoutButton = () => {
  return (
    <div class="relative inline-flex  group">
      <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        title="Get quote now"
        class="relative inline-flex items-center justify-center px-8 py-1 text-xs font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        Signout
      </button>
    </div>
  );
};
export default SignoutButton;
