// pages/api/signup.js

import { session } from 'next-auth/react';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export default async function handle(req, res) {
  switch (req.method) {
    case 'OPTIONS':
      res.status(200).end();
      break;
    case 'POST':
      await signupUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['POST', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function signupUser(req, res) {
  const { firstname, lastname, username, email, password } = req.body;

  console.log('signup hit');
  console.log({ firstname, lastname, username, email, password });

  // Add validation here (e.g., check if the email is already in use)

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword,
      },
    });

    // After the user is created, sign them in using NextAuth.js
    // You need to implement this part according to your authentication setup
    // This is just a placeholder
    const { error } = await session.create({
      jwt: {
        user,
      },
      session: {
        expires: '1d',
      },
    });

    if (error) {
      throw new Error(error);
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
}
