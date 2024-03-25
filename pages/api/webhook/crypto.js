// pages/api/hook.js
import chalk from 'chalk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log(chalk.greenBright('COINQVEST WEBHOOK REQ.BODY'));
  console.log(req.body);

  switch (req.body.eventType) {
    case 'CHECKOUT_COMPLETED':
      const { payload } = req.body.data.checkout;
      const { customerId } = payload.charge;
      const { quantity } = payload.charge.lineItems[0];

      // Call your function to update user bullets here
      // updateUserBullets(customerId, quantity);
      break;
    case 'UNDERPAID_ACCEPTED':
      const customerIdX = req.body.data.checkout.payload.charge.customerId;
      const quantityX =
        req.body.data.checkout.payload.charge.lineItems[0].quantity;

      // Call your function to update user bullets here
      // updateUserBullets(customerIdX, quantityX);
      break;
    case 'REFUND_COMPLETED':
      console.log(chalk.greenBright('REFUND_COMPLETED'));
      break;
    case 'CHECKOUT_UNDERPAID':
      console.log(chalk.redBright('CHECKOUT_UNDERPAID'));
      break;
  }

  return res.status(200).json({ message: 'Webhook processed successfully' });
}
