import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import { useRegister } from '@/context/RegisterContext';
import PicksDialog from '..//dialogs/PicksDialog';
import RegistrationDialog from '..//dialogs/RegistrationDialog';
import RulesDialog from '..//dialogs/RulesDialog';
import { Button } from '@material-tailwind/react';

const ButtonBar = () => {
  const { users, updateUsersData, user, loading } = useContext(UserContext);
  const { isCollapsed } = useRegister();
  return (
    <div className="flex flex-row justify-center gap-3 w-full">
      <PicksDialog users={users} user={user} />
      <RegistrationDialog isCollapsed={isCollapsed} />

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
