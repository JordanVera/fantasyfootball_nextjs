// pages/api/webhook.js
import { buffer } from 'micro';
import Stripe from 'stripe';
import prisma from '../../../lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    // console.log(process.env.STRIPE_WEBHOOK_SECRET);

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        'whsec_5f9fa0727f655f3b59e297a6684e109a69874214f3eaf565a7e0ed4b69e29476'
      );

      // console.log('EVNT');
      // console.log(event);
    } catch (err) {
      console.error(err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          console.log('PAYMENT SUCCESSFUL CUH');
          const session = event.data.object;

          const userId = parseInt(session.metadata.userId);

          const quantity = parseInt(session.metadata.quantity);

          // console.log(session);

          console.log('session.payment_status');
          console.log(session.payment_status);
          console.log('______________________');
          console.log('SESSION');
          console.log(session);
          console.log({ userId, quantity });

          try {
            await prisma.checkout.create({
              data: {
                userId,
                quantity,
                stripeCheckoutId: session.id,
              },
            });

            await prisma.user.update({
              where: {
                id: userId,
              },
              data: {
                bullets: {
                  increment: quantity,
                },
              },
            });
          } catch (error) {
            console.log(error);
            console.log(error.message);
          }
      }
    } catch (err) {
      console.error('Error in webhook handler:', err);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }

    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export default handler;
