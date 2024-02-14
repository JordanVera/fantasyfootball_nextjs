// components/CheckoutButton.js or wherever you implement your checkout logic
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@material-tailwind/react';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutButton = ({ items }) => {
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
    <Button variant="gradient" color="orange" onClick={handleCheckout}>
      Checkout
    </Button>
  );
};

export default CheckoutButton;
