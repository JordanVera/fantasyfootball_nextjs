import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from '@material-tailwind/react';
import { useUser } from '@/context/UserContext';

const inputClass =
  'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg p-2 block w-full appearance-none leading-normal';

export default function RulesDialog() {
  const { openSettingsDialog, handleOpenSettingsDialog } = useUser();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Dialog
      open={openSettingsDialog}
      handler={handleOpenSettingsDialog}
      className="bg-white dark:bg-black  overflow-y-auto h-96 border dark:border-gray-800 border-gray-500"
      size="sm"
    >
      <DialogHeader className=" capitalize text-primary">
        Seeeettttings
      </DialogHeader>
      <DialogBody>
        <label className="text-xs font-bold text-white">
          Password
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="password"
            placeholder="Password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="text-xs font-bold text-white">
          Confirm Password
          <input
            className={`${inputClass} mt-1.5 `}
            required
            type="password"
            placeholder="Password123"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </DialogBody>
    </Dialog>
  );
}
