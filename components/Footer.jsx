import Link from 'next/link';
import Logo from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-black border-t border-gray-300 dark:border-gray-900">
      <div className="w-full  mx-auto p-10 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo height={100} width={100} />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline me-4 md:me-6">
                Login
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline me-4 md:me-6">
                Signup
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:underline ">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} NFL Last Longer™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
