import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { useRouter } from 'next/router';
import Stripe from 'stripe';

// Inside your component

export default function PaymentSuccess() {
  const router = useRouter();
  const { session_id } = router.query;
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

  const [checkoutSession, setCheckoutSession] = useState({});

  useEffect(() => {
    console.log({ session_id });

    if (session_id) {
      getCheckoutDataFromStripe();
    }
  }, [session_id]);

  const getCheckoutDataFromStripe = async (sessionId) => {
    try {
      const checkoutSession = await stripe.checkout.sessions.retrieve(
        session_id
      );
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session_id
      );

      console.log({ checkoutSession });
      console.log({ lineItems });

      setCheckoutSession(checkoutSession);

      return checkoutSession;
    } catch (error) {
      console.log(error);
    }
  };
  // Inside an async function

  return (
    <main
      className={`flex min-h-screen flex-col m-5 ${inter.className} bg-black items-center`}
    >
      <div>
        {/* <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10 text-primary"
          initial={{ opacity: 0 }} // Start from transparent
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 1, ease: 'easeIn' }}
        > */}
        <div className="flex flex-col lg:flex-row bg-black rounded-lg gap-5 lg:gap-0">
          <div className="w-full xl:w-4/5 flex flex-col justify-center gap-5 bg-[#5551ff] rounded-lg lg:rounded-r-none p-5">
            <h1 className="capitalize text-xl lg:text-3xl font-bold">
              You have successfully completed the checkout process
            </h1>
            <p className="text-white text-md">
              *** You have successfully checked out, your purchase of{' '}
              {checkoutSession?.metadata?.quantity} entries was successful and
              should be in your account. ***
            </p>
            <p className="text-black dark:text-white">
              Getting started in NFL Last Longer is simple. First, register and
              create your entry. Each week, before the designated cutoff time,
              select one NFL team to win their game outright. The key to victory
              is not just choosing correctly but planning ahead. Once a team is
              selected, it’s off your board for the season.
            </p>
            <p className="text-black dark:text-white">
              Make your picks carefully: a wrong choice and you're out of the
              competition! Stay sharp, watch the games, and prepare your
              strategies to survive until the end. Are you ready to take on the
              challenge?
            </p>
          </div>

          <div className="w-full xl:w-1/5 bg-gray-900 lg:flex items-center justify-center">
            <div className="w-full h-full">
              <div
                style={{
                  width: '100%',
                  height: '0',
                  paddingBottom: '100%',
                  position: 'relative',
                }}
              >
                <iframe
                  src="https://giphy.com/embed/MpOsBzds5IuFS5sUu0"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute' }}
                  frameBorder="0"
                  className="giphy-embed  rounded-lg lg:rounded-l-none"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </main>
  );
}
