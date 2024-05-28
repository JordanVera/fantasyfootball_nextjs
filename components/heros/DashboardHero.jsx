import { useEffect, useState } from 'react';
import { getStartingWeek } from '@/utils/dates';
import { useUser } from '@/context/UserContext';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DashboardHero = () => {
  const { handleOpenRulesDialog, user, users } = useUser();

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
        className="bg-black rounded-xl flex flex-col-reverse md:flex-row border dark:border-gray-800 border-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-col gap-5 p-5 rounded-xl lg:rounded-l-xl lg:rounded-r-none  w-full lg:w-1/2  bg-gradient-to-bl from-blue-500 to-blue-900 drop-shadow-xl ">
          <div className="max-w-[800px] ">
            <h1 className="text-2xl font-bold mb-5 text-white">
              {user?.name || user.username}'s dashboard
            </h1>

            <div className="flex flex-col gap-2">
              <h2 className=" text-white">
                There is a total of {totalActiveUsers} active users with{' '}
                {totalUserBullets} entries which makes the prize pool $
                {totalUserBullets * process.env.NEXT_PUBLIC_BUYIN}
              </h2>

              <h2 className=" text-white">
                Once you buyin you will be able to make your picks{' '}
              </h2>

              <h2 className="text-orange-700  ">
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
            <button
              onClick={handleOpenRulesDialog}
              className="flex flex-row gap-2 mt-5 text-left rounded-full border border-white   text-white py-2 px-5"
            >
              <p>Please make sure to read the rules!</p>
              <ArrowForwardIcon />
            </button>
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
// <div className=" p-5 w-full">
//   <div className="max-w-[800px]">
//     <h1 className="text-2xl font-bold mb-5">{user.name}'s dashboard</h1>

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
//         className="text-left hover:text-orange-500 underline"
//       >
//         <h2>Please make sure to read the rules!</h2>
//       </button>

//       <h2 className="text-blue-500 font-normal">
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
