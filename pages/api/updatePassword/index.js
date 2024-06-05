// File: /api/student/index.js
import prisma from '../../../lib/prisma.mjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import bcrypt from 'bcryptjs';

export default async function handle(req, res) {
  const session = await getServerSession(req, res, authOptions);

  switch (req.method) {
    case 'OPTIONS':
      return res.status(200).end();
    case 'POST':
      return updatePassword(req, res, session);
    default:
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function updatePassword(req, res, session) {
  const { password } = req.body;
  const userId = session.user.id;

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return res.status(200).json({
      success: true,
      message: `successfully updated password`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
