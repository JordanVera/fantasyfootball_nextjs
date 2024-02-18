// File: /api/student/index.js
import prisma from '../../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handle(req, res) {
  const session = await getServerSession(req, res, authOptions);

  switch (req.method) {
    case 'OPTIONS':
      return res.status(200).end();
    case 'POST':
      return postPicksForUser(req, res, session);
    default:
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function postPicksForUser(req, res, session) {
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log(`REQ`);
    console.log(req.body);

    // const user = await prisma.user.findUnique({
    //   where: {
    //     id: session.user.id,
    //   },
    // });
    return res.status(200).json({ msg: 'yesirkski' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
