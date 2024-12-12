import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import NoBulletsAlert from '@/components/alerts/NoBulletsAlert';
import { X } from 'lucide-react';

import { getStartingWeek } from '@/utils/dates';
import { useUser } from '@/context/UserContext';

export default function PicksDialog() {
  const { user, updateUserPicks, openPicksDialog, setOpenPicksDialog } =
    useUser();
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   console.log(`USR`);
  //   console.log(user);
  // }, [user]);

  const handleOpen = () => setOpenPicksDialog(!openPicksDialog);

  const [assignmentError, setAssignmentError] = useState('');

  useEffect(() => {
    console.log({ assignmentError });
  }, [assignmentError]);

  return (
    <Dialog
      open={openPicksDialog}
      handler={handleOpen}
      className="bg-white dark:bg-black overflow-y-auto max-h-[80vh] border dark:border-gray-800 border-gray-500"
      size="sm"
    >
      <DialogHeader className="text-center capitalize text-primary">
        Please make your selections
      </DialogHeader>

      <DialogBody>
        {assignmentError && (
          <div className="flex items-center justify-between p-4 mb-4 text-xs font-medium text-red-500 border-l-4 border-red-500 rounded-r-lg bg-red-500/20">
            <p>{assignmentError}</p>
            <button onClick={() => setAssignmentError(null)}>
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        {user.bullets === 0 && <NoBulletsAlert />}

        <WeeksAccordion
          user={user}
          updateUserPicks={updateUserPicks}
          setOpenPicksDialog={setOpenPicksDialog}
          setAssignmentError={setAssignmentError}
        />
      </DialogBody>
    </Dialog>
  );
}

const WeeksAccordion = ({
  user,
  updateUserPicks,
  setOpenPicksDialog,
  setAssignmentError,
}) => {
  const { userLoserEntries } = useUser();
  const [open, setOpen] = useState(-1);
  const [picks, setPicks] = useState([]);
  const [week, setWeek] = useState('');

  const teamsArr = [
    'ARI',
    'ATL',
    'BAL',
    'BUF',
    'CAR',
    'CHI',
    'CIN',
    'CLE',
    'DAL',
    'DEN',
    'DET',
    'GB',
    'HOU',
    'IND',
    'JAX',
    'KC',
    'LAC',
    'LAR',
    'LV',
    'MIA',
    'MIN',
    'NE',
    'NO',
    'NYG',
    'NYJ',
    'PHI',
    'PIT',
    'SEA',
    'SF',
    'TB',
    'TEN',
    'WAS',
  ];

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // setOpenPicksDialog(false);

    const res = await updateUserPicks(week, picks);

    console.log('HANDLE SUBMIT RES');
    console.log(res.error);

    if (res.error) {
      setAssignmentError(res.error);
      return;
    }

    setOpenPicksDialog(false);
  };

  const handleWeekChange = (week) => {
    setWeek(week);
  };

  const handlePickChange = (index, value) => {
    const newPicks = [...picks];
    newPicks[index] = { entry: index, pick: value };
    setPicks(newPicks);
  };

  const groupedPicks = user.Picks.reduce((grouped, pick) => {
    (grouped[pick.entryNumber] = grouped[pick.entryNumber] || {})[pick.week] =
      pick;
    return grouped;
  }, {});

  useEffect(() => {
    console.log('hro');
    console.log(groupedPicks);
  }, [groupedPicks]);

  // const hasLosingPickInPreviousWeeks = (entryNumber, currentWeek) => {
  //   for (let week = 1; week < currentWeek; week++) {
  //     // Check if the entry exists in groupedPicks
  //     if (groupedPicks[entryNumber]) {
  //       const pick = groupedPicks[entryNumber][week];

  //       // console.log('pick');
  //       // console.log({ pick });

  //       // Check if the pick exists and is in the losers array
  //       if (pick) {
  //         const isLoser = losers.some(
  //           (loser) => loser.week === pick.week && loser.team === pick.team
  //         );

  //         if (isLoser) {
  //           return true;
  //         }
  //       }
  //     }
  //   }

  //   return false;
  // };

  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 18 }).map((_, weekIndex) => {
        return weekIndex < getStartingWeek() ? null : (
          <Accordion
            key={weekIndex}
            open={open === weekIndex}
            icon={<Icon id={1} open={open} />}
            disabled={weekIndex < getStartingWeek()}
          >
            <AccordionHeader
              onClick={() => {
                handleOpen(weekIndex);
                handleWeekChange(weekIndex);
              }}
              className="capitalize text-primary hover:text-secondary hover:border-blue-600"
            >
              Week {weekIndex + 1}
            </AccordionHeader>
            <AccordionBody>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {Array.from({ length: user.bullets }).map((_, j) => {
                  // console.log({ j, weekIndex });
                  // console.log(hasLosingPickInPreviousWeeks(j, weekIndex + 1));

                  // const isLoser = losers.some(
                  //   (loser) =>
                  //     loser.week === weekIndex + 1 && loser.team === pick
                  // );
                  return (
                    <div
                      className="flex flex-col gap-1"
                      key={`${j}-${weekIndex}`}
                    >
                      <label className="text-primary">
                        Entry {j + 1}
                        {userLoserEntries.includes(j) && (
                          <span className="text-red-500"> - (Lost)</span>
                        )}
                      </label>
                      <select
                        key={j}
                        className="px-2 py-3 capitalize bg-gray-300 border border-gray-400 rounded-md text-primary dark:bg-gray-900 dark:border-gray-800"
                        onChange={(e) => handlePickChange(j, e.target.value)}
                        disabled={userLoserEntries.includes(j)}
                      >
                        {teamsArr.map((team, index) => (
                          <option
                            key={index}
                            value={team}
                            className="text-primary"
                          >
                            {team}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}

                <Button
                  type="submit"
                  className="capitalize"
                  color="blue"
                  size="sm"
                >
                  submit
                </Button>
              </form>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
