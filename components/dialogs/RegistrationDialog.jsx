import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Option,
  Select,
} from '@material-tailwind/react';

import { loadStripe } from '@stripe/stripe-js';
import { useRegister } from '@/context/RegisterContext';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';
import UserService from '@/services/UserService';
import { motion } from 'framer-motion';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function RegistrationDialog() {
  const handleOpen = () => setRegistrationOpen(!registrationOpen);
  const { registrationOpen, setRegistrationOpen } = useUser();
  const { isCollapsed, setIsCollapsed } = useRegister();
  const [stripeOrCrypto, setStripeOrCrypto] = useState(0);

  return (
    <>
      <Dialog
        open={registrationOpen}
        handler={handleOpen}
        className="bg-white dark:bg-black "
      >
        <DialogHeader className="text-primary capitalize flex flex-row gap-5 items-center">
          {stripeOrCrypto !== 0 && (
            <button
              className="text-sm font-normal bg-gray-300 dark:bg-gray-800 p-2 rounded-md"
              onClick={() => setStripeOrCrypto(0)}
            >
              Back
            </button>
          )}

          {stripeOrCrypto === 0
            ? 'Please choose checkout method'
            : 'How many entries would you like to purchase?'}
        </DialogHeader>

        <DialogBody>
          <div>
            {stripeOrCrypto === 0 && (
              <div className="flex flex-col md:flex-row gap-5 items-stretch justify-between">
                <button
                  onClick={() => setStripeOrCrypto(1)}
                  className="flex flex-col gap-5   w-full md:w-1/2 border border-gray-700 rounded-lg p-5  justify-between"
                >
                  <Image
                    src={'/images/stripe.png'}
                    height={100}
                    width={100}
                    alt="stripe logo"
                    className="mx-auto"
                  />
                  <h3 className="text-primary text-lg font-bold capitalize">
                    checkout with stripe
                  </h3>
                </button>

                <button
                  onClick={() => setStripeOrCrypto(2)}
                  className="flex flex-col gap-5 w-full md:w-1/2 border border-gray-700 rounded-lg p-5 justify-between"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <Image
                      src={'/images/bitcoinLogo.png'}
                      height={40}
                      width={40}
                      alt="stripe logo"
                      className="mx-auto"
                    />
                    <Image
                      src={'/images/litecoinLogo.png'}
                      height={40}
                      width={40}
                      alt="stripe logo"
                      className="mx-auto"
                    />
                    <Image
                      src={'/images/stellarLumensLogo.png'}
                      height={40}
                      width={40}
                      alt="stripe logo"
                      className="mx-auto"
                    />
                    <Image
                      src={'/images/rippleLogo.png'}
                      height={40}
                      width={40}
                      alt="stripe logo"
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-primary text-lg font-bold capitalize">
                    checkout with crypto
                  </h3>
                </button>
              </div>
            )}

            {stripeOrCrypto === 1 && <StripeCheckout handleOpen={handleOpen} />}
            {stripeOrCrypto === 2 && <CryptoCheckout handleOpen={handleOpen} />}
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

const StripeCheckout = ({ handleOpen }) => {
  const [numberOfEntries, setNumberOfEntries] = useState(0);

  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems }),
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

  const lineItems = [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 6000,
      },
      quantity: numberOfEntries,
    },
  ];

  return (
    <>
      <p className="text-primary">
        The key to more success is to have a lot of pillows. Put it this way, it
        took me twenty five years to get these plants, twenty five years of
        blood sweat and tears, and I&apos;m never giving up, I&apos;m just
        getting started. I&apos;m up to something. Fan luv.
      </p>

      <div className="w-72 my-10">
        <Select
          label="number of entries"
          className="capitalize text-primary"
          color="blue"
          variant="standard"
          onChange={(val) => setNumberOfEntries(val)}
        >
          {Array.from({ length: 25 }, (_, index) => (
            <Option key={index + 1} value={index + 1}>
              {index + 1}
            </Option>
          ))}
        </Select>
      </div>

      <footer className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <p className="font-bold text-primary text-sm">Powered by </p>
          <Image
            className="mx-auto "
            src={'/images/stripe.png'}
            alt="stripe logo"
            height={60}
            width={60}
          />
        </div>

        <div className="flex flex-row items-center justify-end">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={handleCheckout}
            size="sm"
            className="bg-gradient-to-b from-indigo-700 to-indigo-900 group relative flex items-center  overflow-hidden px-3 py-3 capitalize"
          >
            <div className="pr-12">Check out with Stripe</div>
            <span className="absolute right-0 grid h-full w-12 place-items-center bg-indigo-900 transition-colors ">
              <Image
                src={'/images/stripe.png'}
                alt="stripe logo"
                height={50}
                width={50}
              />
            </span>
          </Button>
        </div>
      </footer>
    </>
  );
};

const CryptoCheckout = () => {
  const [numberOfEntries, setNumberOfEntries] = useState(0);

  const chargeObj = {
    charge: {
      // customerId: req.body.customerId,
      currency: 'USD',
      lineItems: [
        {
          description: 'NFL Last Longer Entry',
          netAmount: 60,
          // netAmount: process.env.BUYIN,
          quantity: numberOfEntries,
        },
      ],
    },
    // webhook: `http://localhost:3000/api/webhook/crypto`,
    // links: {
    //   returnUrl: `http://localhost:3000/dashboard`,
    //   cancelUrl: `http://localhost:3000/dashboard`,
    // },
    pageSettings: {
      displaySellerInfo: false,
      shopName: 'NFL Last Longer',
    },
    settlementCurrency: 'USD',
  };

  // Create an instance of UserService

  const handleSubmit = async () => {
    const data = await UserService.checkoutWithCrypto(chargeObj);

    if (!data) {
      console.error('Error: Checkout with crypto failed');
      return;
    }

    // console.log('Success:', data);
    const { url } = data;
    window.location.href = url;

    // Handle success
  };

  return (
    <>
      <p className="text-primary">
        The key to more success is to have a lot of pillows. Put it this way, it
        took me twenty five years to get these plants, twenty five years of
        blood sweat and tears, and I&apos;m never giving up, I&apos;m just
        getting started. I&apos;m up to something. Fan luv.
      </p>

      <div className="w-72 my-10">
        <Select
          label="number of entries"
          className="capitalize text-primary"
          color="blue"
          variant="standard"
          onChange={(val) => setNumberOfEntries(val)}
        >
          {Array.from({ length: 25 }, (_, index) => (
            <Option key={index + 1} value={index + 1}>
              {index + 1}
            </Option>
          ))}
        </Select>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
