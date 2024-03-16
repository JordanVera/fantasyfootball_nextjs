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
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

import { UserContext } from '@/context/UserContext';
import { getStartingWeek } from '@/utils/dates';

export default function PicksDialog() {
  const { user, updateUserPicks } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   console.log(`USR`);
  //   console.log(user);
  // }, [user]);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="capitalize flex flex-row gap-3 items-center"
        color="blue"
        size="sm"
      >
        <SportsFootballIcon />
        Make your picks
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-white dark:bg-black overflow-y-auto max-h-[80vh] "
        size="sm"
      >
        <DialogHeader className="text-primary capitalize text-center">
          Please make your selections
        </DialogHeader>
        <DialogBody>
          <WeeksAccordion user={user} updateUserPicks={updateUserPicks} />
        </DialogBody>
      </Dialog>
    </>
  );
}

const WeeksAccordion = ({ user, updateUserPicks }) => {
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

  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 18 }).map((_, weekIndex) =>
        weekIndex < getStartingWeek() ? null : (
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
                {Array.from({ length: user.bullets }).map((_, j) => (
                  <Select
                    variant="standard"
                    key={j}
                    label={`Entry ${j + 1}`}
                    className="capitalize"
                    color="blue"
                    onChange={(val) => handlePickChange(j, val)}
                  >
                    {teamsArr.map((team, j) => (
                      <Option key={j} value={team}>
                        {team}
                      </Option>
                    ))}
                  </Select>
                ))}

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
        )
      )}
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
