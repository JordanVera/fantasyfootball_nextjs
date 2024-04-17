import React from 'react';
import PicksDialog from '..//dialogs/PicksDialog';
import RulesDialog from '..//dialogs/RulesDialog';
import { Button } from '@material-tailwind/react';
import CheckoutButton from './CheckoutButton';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <button
        onClick={() => setOpenPicksDialog(true)}
        ref={ref}
        href={'/login'}
        className="text-left hover:scale-105 duration-300 cursor-pointer"
      >
        <motion.div
          className="bg-black rounded-lg  flex flex-col-reverse xl:flex-row w-full h-full "
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className="flex flex-row-reverse lg:flex-col justify-center items-end lg:items-start gap-8 bg-[#d7d7d7] dark:bg-gray-900  p-5 lg:p-8 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none ">
            <div className=" bg-[#5551ff] text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
              <p className="mx-auto text-center">Step 1</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl lg:text-2xl text-black dark:text-white font-bold">
                Make Picks
              </h2>

              <p className="text-xs lg:text-sm text-black dark:text-white">
                Click here to make your picks for the week. Please note your
                picks must be made before the TNF game begins, EVEN IF YOU ARE
                NOT PICKING THE TNF GAME.
              </p>
            </div>
          </div>

          <div
            className="min-h-[120px] flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none"
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
        className="text-left hover:scale-105 duration-300 cursor-pointer"
      >
        <motion.div
          className="bg-black rounded-lg  flex flex-col-reverse xl:flex-row w-full h-full "
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className="flex flex-row-reverse lg:flex-col justify-center items-end lg:items-start gap-8 bg-[#d7d7d7] dark:bg-gray-900  p-5 lg:p-8 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none ">
            <div className=" bg-[#5551ff] text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
              <p className="mx-auto text-center">Step 2</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl lg:text-2xl text-black dark:text-white font-bold">
                Register for Tournament
              </h2>

              <p className="text-xs lg:text-sm text-black dark:text-white">
                Checkout and buy entries into the tournament. You will be
                redirected to the payment page.
              </p>
            </div>
          </div>

          <div
            className="min-h-[120px] flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none"
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
    </div>
  );
};
// <div className="flex flex-col lg:flex-row justify-center gap-3 w-full">
//   <PicksDialog users={users} user={user} />

//   <CheckoutButton />

//   <RulesDialog />

//   <Button
//     variant="text"
//     className="capitalize text-blue-500 text-sm font-normal"
//   >
//     <a href="https://www.nfl.com/schedules/" target="_blank">
//       Schedule
//     </a>
//   </Button>
// </div>
export default ButtonBar;
