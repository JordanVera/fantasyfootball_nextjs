import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import CheckoutSuccessButtons from '@/components/success-page/CheckoutSuccessButtons';

const inter = Inter({ subsets: ['latin'] });
import { useRouter } from 'next/router';
import Stripe from 'stripe';
import SuccessHero from '@/components/success-page/SuccessHero';

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
      className={`flex gap-5 min-h-screen flex-col m-5 ${inter.className} bg-black items-center`}
    >
      <SuccessHero checkoutSession={checkoutSession} />
      <CheckoutSuccessButtons />
    </main>
  );
}
