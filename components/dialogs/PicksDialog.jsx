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

import { UserContext } from '@/context/UserContext';
import UserService from '@/services/UserService';

export default function RegistrationDialog() {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   console.log(`USR`);
  //   console.log(user);
  // }, [user]);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="capitalize">
        Make your picks
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-blue-gray-900 overflow-y-auto h-96"
        size="xs"
      >
        <DialogHeader className="text-white capitalize text-center">
          Please make your selections
        </DialogHeader>
        <DialogBody>
          <WeeksAccordion user={user} />
        </DialogBody>
      </Dialog>
    </>
  );
}

const WeeksAccordion = ({ user }) => {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    UserService.submitPicks(week, picks);
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
      {Array.from({ length: 18 }).map((_, weekIndex) => (
        <Accordion
          key={weekIndex}
          open={open === weekIndex}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => {
              handleOpen(weekIndex);
              handleWeekChange(weekIndex);
            }}
            className={`border-b-0 transition-colors ${
              open === weekIndex ? 'text-blue-500 hover:!text-blue-700' : ''
            }`}
          >
            Week {weekIndex + 1}
          </AccordionHeader>
          <AccordionBody className="font-normal">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {Array.from({ length: user.bullets }).map((_, j) => (
                <Select
                  key={j}
                  label={`Entry ${j + 1}`}
                  className="capitalize"
                  color="orange"
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
                color="orange"
                size="sm"
              >
                submit
              </Button>
            </form>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};
