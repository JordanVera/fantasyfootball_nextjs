// File: /api/student/index.js
import prisma from '../../../lib/prisma.mjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { getStartingWeek } from '../../../utils/dates';
import colors from 'colors';

export default async function handle(req, res) {
  const session = await getServerSession(req, res, authOptions);

  switch (req.method) {
    case 'OPTIONS':
      return res.status(200).end();

    case 'GET':
      return getLoserData(req, res, session);
    default:
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getLoserData(req, res, session) {
  // const { picks, week } = req.body;

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const losers = await prisma.loser.findMany({});

    return res.status(200).json({
      success: true,
      message: `successfully retrieved losers data from db`,
      losers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
