// components/CheckoutButton.js or wherever you implement your checkout logic
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
  'pk_test_51NkWBtEUVwjR7SD7ecFDMBlM0TiUg9CwYfDzEgatFhf3inD4V6LRI4rRMA6KMS8kbWgr1efzACCHTgv54UkJ598I001VpYPvTi'
);

const CheckoutButton = ({ items }) => {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });
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

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default CheckoutButton;
