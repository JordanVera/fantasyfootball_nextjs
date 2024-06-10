// File: /api/student/index.js
import prisma from '../../../lib/prisma.mjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import twilio from 'twilio';
import crypto from 'crypto';
import dotenv from 'dotenv';

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export default async function handle(req, res) {
  const session = await getServerSession(req, res, authOptions);

  switch (req.method) {
    case 'OPTIONS':
      return res.status(200).end();
    case 'POST':
      return forgot(req, res, session);
    default:
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function forgot(req, res, session) {
  const { phoneNumber } = req.body;

  try {
    // Generate a random token
    const token = crypto.randomBytes(20).toString('hex');

    // Get the current date and time
    const now = new Date();

    // Set the token to expire after 1 hour
    const expires = new Date(now.getTime() + 60 * 60 * 1000);

    // Update the user with the token and its expiry time
    const updatedUser = await prisma.user.update({
      where: { phoneNumber },
      data: { resetPasswordToken: token, resetPasswordExpires: expires },
    });

    // Send the token to the user's phone number
    client.messages.create({
      body: `Your password reset token is ${token}. It will expire in 1 hour.`,
      from: '+18449615053',
      to: `+1${phoneNumber}`,
    });

    return res.status(200).json({
      success: true,
      message: `A password reset token has been sent to ${phoneNumber}.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
