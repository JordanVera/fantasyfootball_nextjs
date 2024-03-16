// pages/api/signup.js

import { signIn } from 'next-auth/react';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export default async function handle(req, res) {
  switch (req.method) {
    case 'OPTIONS':
      return res.status(200).end();
    case 'GET':
      return signupUser(req, res);
    default:
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function signupUser(req, res) {
  const { firstName, lastName, username, email, password } = req.body;

  console.log('signup hit');
  console.log({ firstName, lastName, username, email, password });

  // Add validation here (e.g., check if the email is already in use)

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    },
  });

  // After the user is created, sign them in using NextAuth.js
  signIn('credentials', { email, password, callbackUrl: `/dashboard` });

  res.status(200).json({ success: true });
}
