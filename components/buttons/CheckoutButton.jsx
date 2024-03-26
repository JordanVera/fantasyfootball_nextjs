import { useUser } from '@/context/UserContext';
import { Button } from '@material-tailwind/react';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const CheckoutButton = () => {
  const { registrationOpen, setRegistrationOpen } = useUser();
  return (
    <Button
      onClick={() => setRegistrationOpen(!registrationOpen)}
      size="sm"
      className="bg-gradient-to-b from-indigo-700 to-indigo-900 group relative flex items-center  overflow-hidden px-3 py-3"
    >
      <div className="pr-12 capitalize">Buyin to the Competition</div>
      <span className="absolute right-0 grid h-full w-12 place-items-center bg-indigo-900 transition-colors ">
        <CreditCardIcon />
      </span>
    </Button>
  );
};
export default CheckoutButton;
