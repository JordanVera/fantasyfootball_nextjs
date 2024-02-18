import { useState, useEffect, useContext } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Option,
  Select,
} from '@material-tailwind/react';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
import { UserContext } from '@/context/UserContext';

export default function RegistrationDialog() {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(`USR`);
    console.log(user);
  }, [user]);

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

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="capitalize">
        Make your picks
      </Button>
      <Dialog open={open} handler={handleOpen} className="bg-blue-gray-900">
        <DialogHeader className="text-white capitalize">
          Please make your selections
        </DialogHeader>
        <DialogBody className="text-gray-600">
          <div className="w-72 my-10">
            <Select
              label="make your selection"
              className="capitalize"
              color="orange"
              onChange={() => console.log('yesirski')}
            >
              {teamsArr.map((team, index) => (
                <Option key={index} value={team}>
                  {team}
                </Option>
              ))}
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="orange"
            onClick={() => console.log('yesirski')}
          >
            Checkout
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
