import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Option,
  Select,
  IconButton,
} from '@material-tailwind/react';
import { loadStripe } from '@stripe/stripe-js';
import { useRegister } from '@/context/RegisterContext';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function RegistrationDialog() {
  const handleOpen = () => setRegistrationOpen(!registrationOpen);
  const [numberOfEntries, setNumberOfEntries] = useState(0);

  const { registrationOpen, setRegistrationOpen } = useUser();

  const { isCollapsed, setIsCollapsed } = useRegister();

  const items = [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: numberOfEntries,
    },
  ];

  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    console.log('RESPONSE');
    console.log(res);

    const { sessionId } = await res.json();
    console.log('Session ID:', sessionId); // Add this line to debug
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        href="/dashboard"
        className="flex items-center hover:bg-gray-900 p-2 rounded-lg bg-transparent shadow-none"
        onClick={handleOpen}
      >
        <CreditCardIcon className="text-black dark:text-white" />
        <span
          className={`ml-3 capitalize ${isCollapsed ? 'hidden' : 'inline'}`}
        >
          Register
        </span>
      </Button>

      <Dialog
        open={registrationOpen}
        handler={handleOpen}
        className="bg-black "
      >
        <DialogHeader className="text-white capitalize">
          checkout. How many entries would you like to purchase?
        </DialogHeader>

        <DialogBody>
          <p className="text-primary">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </p>

          <div className="w-72 my-10">
            <Select
              label="number of entries"
              className="capitalize"
              color="orange"
              onChange={(val) => setNumberOfEntries(val)}
            >
              {Array.from({ length: 25 }, (_, index) => (
                <Option key={index + 1} value={index + 1}>
                  {index + 1}
                </Option>
              ))}
            </Select>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-row items-center justify-between">
          <div>
            <Image
              className="mx-auto mb-10"
              src={'/images/stripe.png'}
              alt="stripe logo"
              height={40}
              width={40}
            />
          </div>

          <div>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="orange" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
