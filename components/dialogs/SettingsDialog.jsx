import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from '@material-tailwind/react';
import { useUser } from '@/context/UserContext';
import { toast } from 'react-toastify';
import { useTheme } from '@/context/ThemeContext';
import UserService from '@/services/UserService';

const inputClass =
  'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg p-2 block w-full appearance-none leading-normal';

export default function RulesDialog() {
  const { openSettingsDialog, handleOpenSettingsDialog } = useUser();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { theme } = useTheme();

  const handleUpdatePassword = async () => {
    setLoading(true);

    if (!password || !confirmPassword) {
      return toast.error('missing or invalid required fields.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
    }

    if (password !== confirmPassword) {
      return toast.error('Your passwords dont match.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
    }

    try {
      await UserService.updatePassword(password, confirmPassword);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
      <DialogBody className="flex flex-col gap-5">
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

        <button
          onClick={handleUpdatePassword}
          className="font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-green-500 text-white w-full p-2 rounded-lg text-sm"
        >
          Update Password
        </button>
      </DialogBody>
    </Dialog>
  );
}
