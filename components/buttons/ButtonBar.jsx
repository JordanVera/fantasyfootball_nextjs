import React from 'react';
import { useUser } from '@/context/UserContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ButtonBar = () => {
  const {
    users,
    user,
    setOpenPicksDialog,
    registrationOpen,
    setRegistrationOpen,
  } = useUser();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="grid items-stretch grid-cols-1 gap-5 lg:grid-cols-2">
      <div ref={ref} href={'/login'} className="text-left rounded-xl">
        <motion.div
          className="flex flex-col-reverse w-full h-full bg-black border border-gray-500 rounded-xl xl:flex-row dark:border-gray-800"
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className="flex flex-row-reverse items-end justify-center w-full gap-8 p-5 duration-300 ease-in lg:flex-col lg:items-start bg-gradient-to-br from-red-500 to-orange-600 group-hover:bg-gray-900 xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none">
            <div className="hidden lg:flex items-center bg-black text-white  rounded-full h-8 px-2 py-1 min-w-[80px] ">
              <p className="mx-auto text-xs text-center lg:text-md">
                Selections
              </p>
            </div>
            <div className="flex flex-col w-full gap-2">
              <h2 className="text-xl font-bold text-white duration-300 ease-in lg:text-2xl group-hover:text-white">
                Make Picks
              </h2>

              <p className="text-xs text-white duration-300 ease-in lg:text-sm group-hover:text-white">
                Click here to make your picks for the week. Please note your
                picks must be made before the TNF game begins, EVEN IF YOU ARE
                NOT PICKING THE TNF GAME.
              </p>
              <div className="relative w-full mt-5 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={() => setOpenPicksDialog(true)}
                  className="relative flex items-center justify-center w-full py-3 text-xs font-bold leading-none bg-black divide-x divide-gray-600 px-7 rounded-xl"
                >
                  Make your picks
                </button>
              </div>
            </div>
          </div>

          <div
            className="min-h-[120px] h-full flex flex-col justify-center items-center bg-gray-900 p-5  w-full xl:w-1/2 rounded-t-xl  xl:rounded-tr-xl xl:rounded-br-xl xl:rounded-l-none "
            // bg-opacity-50
            style={{
              backgroundImage: "url('/images/1.jpg')",
              backgroundSize: 'cover',
              opacity: 0.7,
            }}
          >
            {' '}
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => setRegistrationOpen(!registrationOpen)}
        ref={ref}
        href={'/login'}
        className="text-left rounded-xl"
      >
        <motion.div
          className="flex flex-col-reverse w-full h-full bg-black border border-gray-500 rounded-xl xl:flex-row dark:border-gray-800"
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className="flex flex-row-reverse items-end justify-center w-full gap-8 p-5 lg:flex-col lg:items-start bg-gradient-to-br from-purple-400 to-purple-800 xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none group-hover:bg-gray-900 ">
            <div className="hidden lg:flex items-center bg-black text-white rounded-full h-8 px-2 py-1 min-w-[80px]">
              <p className="mx-auto text-xs text-center lg:text-md">Checkout</p>
            </div>

            <div className="flex flex-col w-full gap-2">
              <h2 className="text-xl font-bold text-white duration-300 ease-in lg:text-2xl group-hover:text-white">
                Register for Tournament
              </h2>

              <p className="text-xs text-white duration-300 ease-in lg:text-sm group-hover:text-white">
                Checkout and buy entries into the tournament. After clicking
                here, You will be redirected to the payment process.
              </p>
              <div className="relative w-full mt-5 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="relative flex items-center justify-center w-full py-3 text-xs font-bold leading-none bg-black divide-x divide-gray-600 px-7 rounded-xl"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>

          <div
            className="min-h-[120px] h-full flex flex-col justify-center items-center bg-gray-900 p-5 w-full xl:w-1/2 rounded-t-xl  xl:rounded-tr-xl xl:rounded-br-xl xl:rounded-l-none"
            // bg-opacity-50
            style={{
              backgroundImage: "url('/images/register.jpg')",
              backgroundSize: 'cover',
              opacity: 0.7,
            }}
          >
            {' '}
          </div>
        </motion.div>
      </button>
    </div>
  );
};

export default ButtonBar;
