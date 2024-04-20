import { useEffect, useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UserService from '@/services/UserService';

const UserTable = ({ users }) => {
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    console.log('UZRZ');
    console.log(users);
  }, [users]);

  useEffect(() => {
    const fetchData = async () => {
      const { losers } = await UserService.getLoserData();

      console.log({ losers });

      setLosers(losers);
      return losers;
    };

    fetchData();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="w-full">
      <motion.div
        className="overflow-x-auto rounded-xl drop-shadow-xl  "
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <table className="min-w-full divide-y divide-gray-700 rounded-xl">
          <thead className="bg-white dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary capitalize tracking-wider ">
                Name
              </th>
              {Array.from({ length: 18 }).map((_, index) => (
                <th className="px-2 py-3 text-left text-xs font-medium text-primary capitalize tracking-wider ">
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

              console.log('groupedPicks for user ', user.name);
              console.log(groupedPicks);

              // for (let entryNumber in groupedPicks) {
              //   for (let week in groupedPicks[entryNumber]) {
              //     const pick = groupedPicks[entryNumber][week];

              //     // Check if the pick is in the losers array
              //     const isLoser = losers.some(
              //       (loser) =>
              //         loser.week === pick.week && loser.team === pick.team
              //     );

              //     if (isLoser) {
              //       console.log(
              //         `User ${user.name}'s pick for week ${week} and team ${pick.team} is a loser.`
              //       );
              //     } else {
              //       console.log(
              //         `User ${user.name}'s pick for week ${week} and team ${pick.team} is a winner.`
              //       );
              //     }
              //   }
              // }

              return Array.from({ length: user.bullets }).map((_, index) => (
                <tr
                  key={`${user.id}-${index}`}
                  className={` bg-white dark:bg-gray-900 w-full`}
                >
                  <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Avatar
                          className="h-10 w-10 rounded-full"
                          src={user.image}
                          alt={user.name.split('')[0]}
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-black dark:text-white">
                          {user.name} {`(${index + 1})`}
                        </p>
                      </div>
                    </div>
                  </td>
                  {/* console.log({weekIndex});
                  console.log(groupedPicks[index]?.[weekIndex]?.team); */}
                  {Array.from({ length: 18 }).map((_, weekIndex) => {
                    const pick = groupedPicks[index]?.[weekIndex]?.team || '';
                    console.log({ pick });

                    // Check if the pick is in the losers array
                    const isLoser = losers.some(
                      (loser) =>
                        loser.week === weekIndex + 1 && loser.team === pick
                    );

                    let message;

                    // if (pick === '') {
                    //   return <td> </td>;
                    // }

                    if (isLoser) {
                      message = `User ${user.name}'s pick for week ${weekIndex} and team ${pick} is a loser.`;
                      console.log(message);
                    } else {
                      message = `User ${user.name}'s pick for week ${weekIndex} and team ${pick} is a winner.`;
                      console.log(message);
                    }

                    // Return a td with the message and color based on isLoser
                    return (
                      <td
                        className={`${isLoser ? 'text-red-500' : 'text-white'}`}
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
