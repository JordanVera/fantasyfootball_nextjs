// pages/api/buyBullet.js
import WsClient from 'whalestack-sdk';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    case 'POST':
      return handlePost(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}

async function handleGet(req, res) {
  const client = new WsClient(
    process.env.WHALESTACK_API_KEY,
    process.env.WHALESTACK_API_SECRET
  );

  try {
    let response = await client.get('/wallets');

    console.log({ response: response.data });

    return res.status(200).json({ response: response.data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function handlePost(req, res) {
  const { chargeObj } = req.body;

  const session = await getServerSession(req, res, authOptions);

  const client = new WsClient(
    process.env.WHALESTACK_API_KEY,
    process.env.WHALESTACK_API_SECRET
  );

  console.log('CHARGEOBJ');
  console.log(chargeObj);

  try {
    const response = await client.post('/checkout/hosted', chargeObj);

    if (response.status !== 200) {
      console.log('Could not create checkout.');
    }

    console.log('response');
    console.log(response.data);

    const { checkoutId, url } = response.data;

    res.status(200).json({ checkoutId, url });
  } catch (error) {
    console.log('Err');
    console.log(error);
    return res.status(500).json({ message: 'Could not create checkout.' });
  }
}
