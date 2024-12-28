import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useUser } from '@/context/UserContext';
import { TEAMS } from '@/constants/TEAMS';

const TeamAvailabilityTable = ({ users }) => {
  const { losers, numberOfTotalActiveEntries } = useUser();

  // Calculate team availability counts
  const teamCounts = TEAMS.reduce((counts, team) => {
    counts[team] = 0;
    return counts;
  }, {});

  // Count available teams for active entries
  users?.forEach((user) => {
    const groupedPicks = user.Picks.reduce((grouped, pick) => {
      (grouped[pick.entryNumber] = grouped[pick.entryNumber] || {})[pick.week] =
        pick;
      return grouped;
    }, {});

    // For each entry
    Array.from({ length: user.bullets }).forEach((_, entryIndex) => {
      // Check if entry is still active (hasn't picked a losing team)
      const entryPicks = Object.values(groupedPicks[entryIndex] || {});
      const isEntryActive = !entryPicks.some((pick) =>
        losers.some(
          (loser) => loser.week === pick.week + 1 && loser.team === pick.team
        )
      );

      if (isEntryActive) {
        // Count available teams for this entry
        TEAMS.forEach((team) => {
          if (!entryPicks.some((pick) => pick.team === team)) {
            teamCounts[team]++;
          }
        });
      }
    });
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="w-full">
      <motion.div
        className="overflow-x-auto border border-gray-500 rounded-xl drop-shadow-xl dark:border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <table className="min-w-full divide-y divide-gray-700 rounded-xl">
          <thead className="bg-white dark:bg-gray-900">
            {/* <tr>
              <th
                colSpan={TEAMS.length}
                className="px-2 py-3 text-sm font-medium tracking-wider text-center border-b border-gray-700 text-primary"
              >
                Team Availability
              </th>
            </tr> */}
            <tr>
              {TEAMS.map((team, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-xs font-medium tracking-wider text-center capitalize text-primary"
                >
                  {team}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-700">
            <tr className="bg-white dark:bg-gray-900">
              {/* <td className="px-2 py-2 text-sm text-center text-black whitespace-nowrap dark:text-white">
                {numberOfTotalActiveEntries} total active entries
              </td> */}
              {TEAMS.map((team, index) => (
                <td
                  key={index}
                  className={`px-2 py-2 text-sm text-center text-black whitespace-nowrap dark:text-white ${
                    index !== TEAMS.length - 1 ? 'border-r border-gray-500' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <p>{teamCounts[team]}</p>
                    <p className="text-xs text-gray-500">
                      {(
                        (teamCounts[team] / numberOfTotalActiveEntries) *
                        100
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default TeamAvailabilityTable;
