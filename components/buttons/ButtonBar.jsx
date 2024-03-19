import React from 'react';
import PicksDialog from '..//dialogs/PicksDialog';
import RulesDialog from '..//dialogs/RulesDialog';
import { Button } from '@material-tailwind/react';
import CheckoutButton from './CheckoutButton';
import { useUser } from '@/context/UserContext';

const ButtonBar = () => {
  const { users, user } = useUser();

  return (
    <div className="flex flex-row justify-center gap-3 w-full">
      <PicksDialog users={users} user={user} />

      <CheckoutButton />

      <RulesDialog />

      <Button
        variant="text"
        className="capitalize text-blue-500 text-sm font-normal"
      >
        <a href="https://www.nfl.com/schedules/" target="_blank">
          Schedule
        </a>
      </Button>
    </div>
  );
};
export default ButtonBar;
