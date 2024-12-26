import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useUser } from '@/context/UserContext';
import { TEAMS } from '@/constants/TEAMS';

const TeamAvailabilityTable = ({ users }) => {
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
              {TEAMS.map((team, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-xs font-medium tracking-wider text-left capitalize text-primary "
                >
                  {team}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-700"></tbody>
        </table>
      </motion.div>
    </div>
  );
};
export default TeamAvailabilityTable;
