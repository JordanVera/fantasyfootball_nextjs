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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
      <button
        onClick={() => setOpenPicksDialog(true)}
        ref={ref}
        href={'/login'}
        className="group text-left cursor-pointer rounded-xl  hover:scale-105 duration-300 ease-in-out"
      >
        <motion.div
          className=" bg-black rounded-xl  flex flex-col-reverse xl:flex-row w-full h-full border dark:border-gray-800 border-gray-500"
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className="flex flex-row-reverse lg:flex-col justify-center items-end lg:items-start gap-8 bg-gradient-to-br from-red-500 to-orange-600 group-hover:bg-gray-900 duration-300 ease-in p-5 w-full xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none">
            <div className="flex items-center bg-white text-black  rounded-full h-8 px-2 py-1 min-w-[80px] ">
              <p className="mx-auto text-center text-xs lg:text-md">
                Selections
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl lg:text-2xl text-white group-hover:text-white duration-300 ease-in font-bold">
                Make Picks
              </h2>

              <p className="text-xs lg:text-sm text-white group-hover:text-white duration-300 ease-in">
                Click here to make your picks for the week. Please note your
                picks must be made before the TNF game begins, EVEN IF YOU ARE
                NOT PICKING THE TNF GAME.
              </p>
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
      </button>

      <button
        onClick={() => setRegistrationOpen(!registrationOpen)}
        ref={ref}
        href={'/login'}
        className="group text-left cursor-pointer  rounded-xl  hover:scale-105 duration-300 ease-in-out"
      >
        <motion.div
          className="bg-black rounded-xl  flex flex-col-reverse xl:flex-row w-full h-full border dark:border-gray-800 border-gray-500"
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className="flex flex-row-reverse lg:flex-col justify-center items-end lg:items-start gap-8 bg-gradient-to-br from-purple-400 to-purple-800 p-5 w-full xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none group-hover:bg-gray-900 ">
            <div className="flex items-center bg-white text-black rounded-full h-8 px-2 py-1 min-w-[80px]">
              <p className="mx-auto text-center text-xs lg:text-md">Checkout</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl lg:text-2xl text-white group-hover:text-white duration-300 ease-in font-bold">
                Register for Tournament
              </h2>

              <p className="text-xs lg:text-sm text-white group-hover:text-white duration-300 ease-in">
                Checkout and buy entries into the tournament. After clicking
                here, You will be redirected to the payment process.
              </p>
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
