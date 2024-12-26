import { useEffect, useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UserService from '@/services/UserService';
import { useUser } from '@/context/UserContext';

const UserTable = ({ users }) => {
  const { losers } = useUser();

  // useEffect(() => {
  //   console.log('UZRZ');
  //   console.log(users);
  // }, [users]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="w-full">
      <motion.div
        className="overflow-x-auto border border-gray-500 rounded-xl drop-shadow-xl dark:border-gray-800 "
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <table className="min-w-full divide-y divide-gray-700 rounded-xl">
          <thead className="bg-white dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left capitalize text-primary ">
                Name
              </th>
              {Array.from({ length: 18 }).map((_, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-xs font-medium tracking-wider text-left capitalize text-primary "
                >
                  week {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-700">
            {users?.map((user) => {
              const groupedPicks = user.Picks.reduce((grouped, pick) => {
                (grouped[pick.entryNumber] = grouped[pick.entryNumber] || {})[
                  pick.week
                ] = pick;
                return grouped;
              }, {});

              // console.log('groupedPicks for user ', user.name);
              // console.log(groupedPicks);

              return Array.from({ length: user.bullets }).map((_, index) => (
                <tr
                  key={`${user.id}-${index}`}
                  className={` bg-white dark:bg-gray-900 w-full`}
                >
                  <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full">
                        {/* <Avatar
                          className="w-10 h-10 rounded-full"
                          src={user.image}
                          alt={user.username}
                        /> */}

                        <p className="text-xs uppercase">
                          {user.firstname.charAt(0) + user.lastname.charAt(0)}
                        </p>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-black dark:text-white">
                          {user.username} {`(${index + 1})`}
                        </p>
                      </div>
                    </div>
                  </td>
                  {/* console.log({weekIndex});
                  console.log(groupedPicks[index]?.[weekIndex]?.team); */}
                  {Array.from({ length: 18 }).map((_, weekIndex) => {
                    const pick = groupedPicks[index]?.[weekIndex]?.team || '';
                    // console.log({ pick });

                    const isLoser = losers.some(
                      (loser) =>
                        loser.week === weekIndex + 1 && loser.team === pick
                    );

                    return (
                      <td
                        key={`${user.id}-${index}-${weekIndex}`}
                        className={`${
                          isLoser
                            ? 'text-red-500'
                            : 'text-black dark:text-white'
                        }`}
                      >
                        {pick}
                      </td>
                    );
                  })}
                </tr>
              ));
            })}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};
export default UserTable;
