import { useState, useEffect, useContext } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Option,
  Select,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Image from 'next/image';

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

  return (
    <Dialog
      open={openPicksDialog}
      handler={handleOpen}
      className="bg-white dark:bg-black overflow-y-auto max-h-[80vh] border dark:border-gray-800 border-gray-500"
      size="sm"
    >
      <DialogHeader className="text-primary capitalize text-center">
        Please make your selections
      </DialogHeader>
      <DialogBody>
        <WeeksAccordion
          user={user}
          updateUserPicks={updateUserPicks}
          setOpenPicksDialog={setOpenPicksDialog}
        />
      </DialogBody>
    </Dialog>
  );
}

const WeeksAccordion = ({ user, updateUserPicks, setOpenPicksDialog }) => {
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

    setOpenPicksDialog(false);

    await updateUserPicks(week, picks);
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
              className="text-primary capitalize hover:text-secondary hover:border-blue-600"
            >
              Week {weekIndex + 1}
            </AccordionHeader>
            <AccordionBody className="p-5">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {Array.from({ length: user.bullets }).map((_, j) => {
                  // console.log({ j, weekIndex });
                  // console.log(hasLosingPickInPreviousWeeks(j, weekIndex + 1));

                  // const isLoser = losers.some(
                  //   (loser) =>
                  //     loser.week === weekIndex + 1 && loser.team === pick
                  // );
                  return (
                    <select
                      key={j}
                      className="capitalize text-primary bg-gray-300 dark:bg-gray-900 border border-gray-400 dark:border-gray-800 px-2 py-3 rounded-md"
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
