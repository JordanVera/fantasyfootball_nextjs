import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { toast } from 'react-toastify';
import UserService from '@/services/UserService';

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const [step, setStep] = useState(0);

  const handleForgotPassword = async () => {
    setLoading(true);

    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      return toast.error('Please enter a valid phone number.', {
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
      const response = await UserService.forgotPassword(phoneNumber);

      if (response.success) {
        toast.success(response.message, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme === 'dark' ? 'dark' : 'light',
        });

        setStep(1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'text-primary bg-gray-300 dark:bg-gray-900 focus:outline-none focus:shadow-outline dark:focus:border-blue-800 focus:border-blue-500  border border-gray-500 dark:border-gray-800 rounded-lg p-2 block w-full appearance-none leading-normal';

  return (
    <div className="h-full m-5  w-[500px] mx-auto flex flex-col gap-10 mt-24">
      {step === 0 && (
        <div>
          <header className="flex flex-col gap-2 mb-10">
            <h1 className="font-bold text-2xl text-primary">
              Getting back into your NFL Last Longer account
            </h1>
            <h2 className="text-lg text-primary">
              Tell us some information about your account.
            </h2>
          </header>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-primary">
              Enter your phone number
              <input
                className={`${inputClass} mt-1.5 `}
                required
                type="tel"
                placeholder="1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <p className="text-sm text-gray-500">
              We'll text you a code to confirm your number.
            </p>
          </div>
          <button
            onClick={handleForgotPassword}
            className="font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-green-500 text-white w-full p-2 rounded-lg text-sm"
          >
            Continue
          </button>
        </div>
      )}

      {step === 1 && <p></p>}
    </div>
  );
};
export default ForgotPassword;
