import { useEffect } from 'react';
import { Avatar } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const UserTable = ({ users }) => {
  useEffect(() => {
    console.log('UZRZ');
    console.log(users);
  }, [users]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="w-full">
      <motion.div
        className="overflow-x-auto rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <table className="min-w-full divide-y divide-gray-700  border border-gray-700 rounded-xl">
          <thead className="bg-[#d7d7d7] dark:bg-gray-900">
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
          <tbody className="bg-[#d7d7d7] divide-y divide-gray-700">
            {users?.map((user) => {
              const groupedPicks = user.Picks.reduce((grouped, pick) => {
                (grouped[pick.entryNumber] = grouped[pick.entryNumber] || {})[
                  pick.week
                ] = pick;
                return grouped;
              }, {});

              console.log('groupedPicks for user ', user.name);
              console.log(groupedPicks);

              return Array.from({ length: user.bullets }).map((_, index) => (
                <tr
                  key={`${user.id}-${index}`}
                  className={` bg-[#d7d7d7] dark:bg-gray-900 w-full`}
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

                  {Array.from({ length: 18 }).map((_, weekIndex) => (
                    <td
                      key={weekIndex}
                      className={` px-2 py-4 whitespace-nowrap text-black dark:text-white`}
                    >
                      {groupedPicks[index]?.[weekIndex]?.team}
                    </td>
                  ))}
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
