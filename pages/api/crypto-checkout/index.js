// pages/api/buyBullet.js
import WsClient from 'whalestack-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const client = new WsClient(
    process.env.WHALESTACK_API_KEY,
    process.env.WHALESTACK_API_SECRET
  );

  const chargeObj = {
    charge: {
      customerId: req.body.customerId,
      currency: 'USD',
      lineItems: [
        {
          description: 'NFL Last Longer Entry',
          netAmount: process.env.BUYIN,
          quantity: req.body.quantity,
        },
      ],
    },
    webhook: `${process.env.WEBHOOK}/api/webhook/crypto`,
    links: {
      returnUrl: `localhost:3000/dashboard`,
      cancelUrl: `localhost:3000/dashboard`,
    },
    pageSettings: {
      displaySellerInfo: false,
      shopName: 'NFL Last Longer',
    },
    settlementCurrency: 'USD',
  };

  const response = await client.post('/checkout/hosted', chargeObj);

  if (response.status !== 200) {
    console.log('Could not create checkout.');
    return res.status(500).json({ message: 'Could not create checkout.' });
  }

  const { checkoutId, url } = response.data;

  res.status(200).json({ checkoutId, url });
}
