// pages/api/create-checkout-session.js
import stripe from '../../../utils/stripe';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]';

export default async function handler(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ statusCode: 401, message: 'Unauthorized' });
      return;
    }

    if (req.method === 'POST') {
      const { user } = session;

      // console.log('USER');
      // console.log(user);

      console.log('tiems');
      console.log(req.body.lineItems);

      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: req.body.lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        metadata: {
          userId: user.id,
          quantity: req.body.lineItems[0].quantity,
        },
      });

      console.log('checkoutSession');
      console.log(checkoutSession);

      res.status(200).json({ sessionId: checkoutSession.id });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
