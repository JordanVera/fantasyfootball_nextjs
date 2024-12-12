import { useEffect, useState } from 'react';
import { getStartingWeek } from '@/utils/dates';
import { useUser } from '@/context/UserContext';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const DashboardHero = () => {
  const { user, users } = useUser();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    console.log({ users });
  }, [users]);

  const totalUserBullets = users?.reduce(
    (total, user) => total + user.bullets,
    0
  );

  const totalActiveUsers = users?.reduce((total, user) => {
    if (user.bullets > 0) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div ref={ref} className="w-full ">
      <motion.div
        className="flex flex-col-reverse bg-black border border-gray-500 rounded-xl md:flex-row dark:border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-col w-full gap-5 p-5 rounded-xl lg:rounded-l-xl lg:rounded-r-none lg:w-1/2 bg-gradient-to-bl from-blue-500 to-blue-900 drop-shadow-xl ">
          <div className="max-w-[800px] ">
            <h1 className="mb-5 text-2xl font-bold text-white">
              {user?.name || user.username}'s dashboard
            </h1>

            <div className="flex flex-col gap-2">
              <h2 className="text-white ">
                There is a total of {totalActiveUsers} active users with{' '}
                {totalUserBullets} entries which makes the prize pool $
                {totalUserBullets * process.env.NEXT_PUBLIC_BUYIN}
              </h2>

              <h2 className="text-white ">
                Once you buyin you will be able to make your picks{' '}
              </h2>

              <h2 className="text-orange-700 ">
                ***
                <span className="font-bold">
                  It is currently week {getStartingWeek() + 1}{' '}
                </span>
                . Please note you must make your picks on Thursday before 6pm
                CST (7pm EST) for week {getStartingWeek() + 1}.{' '}
                <span className="font-bold">
                  Even if you are not picking the thursday game
                </span>
                .***
              </h2>
            </div>

            <div className="relative w-full mt-5 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link
                href="/rules"
                className="relative flex items-center justify-center w-full py-3 text-xs font-bold leading-none bg-black divide-x divide-gray-600 px-7 rounded-xl"
              >
                Please make sure to read the rules!
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block lg:bg-black min-h-[200px] rounded-t-xl
           lg:rounded-tl-none lg:rounded-r-xl
           w-full lg:w-1/2 bg-center bg-cover "
          // bg-opacity-50
          style={{
            backgroundImage: "url('/images/billsStadium.jpg')",
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </div>
  );
};
export default DashboardHero;

// <div className="rounded-xl border border-gray-700 items-center font-bold flex flex-col lg:flex-row bg-[#17263e]">
// <div className="w-full p-5 ">
//   <div className="max-w-[800px]">
//     <h1 className="mb-5 text-2xl font-bold">{user.name}'s dashboard</h1>

//     <div className="flex flex-col gap-2">
//       <h2 className="font-normal">
//         There is a total of 9 users with 19 entries which makes the prize
//         pool $950
//       </h2>

//       <h2 className="font-normal">
//         Once you buyin you will be able to make your picks{' '}
//       </h2>

//       <button
//         onClick={handleOpenRulesDialog}
//         className="text-left underline hover:text-orange-500"
//       >
//         <h2>Please make sure to read the rules!</h2>
//       </button>

//       <h2 className="font-normal text-blue-500">
//         ***
//         <span className="font-bold">
//           It is currently week {getStartingWeek() + 1}{' '}
//         </span>
//         . Please note you must make your picks on Thursday before 6pm CST
//         (7pm EST) for week {getStartingWeek() + 1}.{' '}
//         <span className="font-bold">
//           Even if you are not picking the thursday game
//         </span>
//         .***
//       </h2>
//     </div>
//   </div>
// </div>

//   <video
//     src="/media/nfl02.mp4"
//     className="h-80 rounded-xl"
//     autoPlay
//     loop
//   ></video>
// </div>
