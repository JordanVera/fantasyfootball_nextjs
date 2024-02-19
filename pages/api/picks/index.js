// File: /api/student/index.js
import prisma from '../../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import colors from 'colors';

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
  const { picks, week } = req.body;

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log(`REQ`);
    console.log(req.body);

    // console.log(session.user);

    // Assuming picks is an array of picks the user wants to create or update
    for (let pick of picks) {
      const existingPick = await prisma.picks.findFirst({
        where: {
          userId: session.user.id,
          entryNumber: pick.entry,
          team: pick.pick,
        },
      });

      if (existingPick) {
        return res.status(400).json({ error: 'Pick already exists' });
      }
    }

    // If no existing picks were found, proceed with creating or updating the picks
    for (let pick of picks) {
      const newPick = await prisma.picks.upsert({
        where: {
          userId_week_entryNumber: {
            userId: session.user.id,
            week: week,
            entryNumber: pick.entry,
          },
        },
        update: {
          team: pick.pick,
        },
        create: {
          userId: session.user.id,
          week: week,
          team: pick.pick,
          entryNumber: pick.entry,
        },
      });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: `successfully updated picks for week ${week + 1}`,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
