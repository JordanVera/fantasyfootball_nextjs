// pages/api/signup.js

import { session } from 'next-auth/react';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma.mjs';

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
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
    phoneNumber,
  } = req.body;

  console.log('signup hit');
  console.log({
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
    phoneNumber,
  });

  // Add validation here (e.g., check if the email is already in use)

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ success: false, error: 'Passwords do not match' });
  }

  if (await prisma.user.findUnique({ where: { phoneNumber } })) {
    try {
      return res
        .status(400)
        .json({ success: false, error: 'Phone number already in use' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (await prisma.user.findUnique({ where: { email } })) {
    try {
      return res
        .status(400)
        .json({ success: false, error: 'Email already in use' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (await prisma.user.findUnique({ where: { username } })) {
    try {
      return res
        .status(400)
        .json({ success: false, error: 'Username already in use' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword,
        phoneNumber,
      },
    });

    // After the user is created, sign them in using NextAuth.js
    // You need to implement this part according to your authentication setup
    // This is just a placeholder
    // const { error } = await session.create({
    //   jwt: {
    //     user,
    //   },
    //   session: {
    //     expires: '1d',
    //   },
    // });

    // if (error) {
    //   throw new Error(error);
    // }

    res
      .status(200)
      .json({ success: true, user, message: `User ${username} created` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
}
