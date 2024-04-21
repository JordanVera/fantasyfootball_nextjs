// import { all, get } from 'axios';
// const { MongoClient } = require('mongodb');
import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';
import prisma from '../lib/prisma.mjs';

dotenv.config();

const { all, get } = axios;

// import scoresRepo from './scoresController.js';

const winners = {
  week1: [],
  week2: [],
  week3: [],
  week4: [],
  week5: [],
  week6: [],
  week7: [],
  week8: [],
  week9: [],
  week10: [],
  week11: [],
  week12: [],
  week13: [],
  week14: [],
  week15: [],
  week16: [],
  week17: [],
  week18: [],
};

const losers = {
  week1: [],
  week2: [],
  week3: [],
  week4: [],
  week5: [],
  week6: [],
  week7: [],
  week8: [],
  week9: [],
  week10: [],
  week11: [],
  week12: [],
  week13: [],
  week14: [],
  week15: [],
  week16: [],
  week17: [],
  week18: [],
};

function getSchedule() {
  // console.log(process.env.API_KEY);
  // console.log(process.env.SEASON);

  return new Promise((resolve, reject) => {
    const requests = [];

    for (let week = 1; week <= 21; week++) {
      // 21 = weeks in the NFL season including POST SEASON
      requests.push(
        get(
          `https://api.sportsdata.io/v3/nfl/scores/json/ScoresBasic/${process.env.SEASON}/${week}?key=${process.env.API_KEY}`
        )
      );
    }

    all(requests)
      .then(
        axios.spread((...responses) => {
          // handle responses here

          for (let i = 0; i < 18; i++) {
            const weekN = `week${i}`;
            const winnerWeek = winners[weekN];
            const loserWeek = losers[weekN];

            // Check if winnerWeek and loserWeek are defined
            if (!winnerWeek || !loserWeek) {
              console.error(`Week ${i} is not defined in winners or losers`);
              continue;
            }

            responses[i].data.forEach((footballGameData) => {
              // console.log(footballGameData);

              if (footballGameData.AwayScore > footballGameData.HomeScore) {
                // console.log(chalk.red('Away team won'));
                winnerWeek.push(footballGameData.AwayTeam);
                loserWeek.push(footballGameData.HomeTeam);
              } else if (
                footballGameData.AwayScore === footballGameData.HomeScore
              ) {
                // console.log(chalk.blue('Game was a tie, both teams lost'));
                loserWeek.push(footballGameData.HomeTeam);
                loserWeek.push(footballGameData.AwayTeam);
              } else {
                // console.log(chalk.green('Home Team won'));
                winnerWeek.push(footballGameData.HomeTeam);
                loserWeek.push(footballGameData.AwayTeam);
              }
            });
          }

          // console.log(chalk.green('WINNERS OBJECT'));
          // console.log(winners);
          console.log(chalk.red('LOSERS OBJECT'));
          console.log(losers);

          console.log(Object.entries(losers));

          seedDB(losers);

          resolve({ winners, losers });
        })
      )
      .catch((err) => {
        console.log(err);
        // console.log(chalk.red(err.response.data.message || err));
        // console.log(chalk.red(err.response.statusText));
      });
  });
}

getSchedule();

async function createLosers(losers) {
  Object.entries(losers).map((nflWeek, i) => {
    const weekNumber = parseInt(nflWeek[0].replace('week', ''), 10) - 1; // Subtract 1 to get the correct week number, starts from a 0 index
    const teams = nflWeek[1];

    teams.forEach(async (team) => {
      console.log('l data for week: ', weekNumber);
      console.log({ team });

      const loserData = await prisma.loser.create({
        data: {
          week: weekNumber,
          team: team,
        },
      });

      // console.log(loserData);
    });

    console.log();

    console.log({ weekNumber, i, teams });
    // return (async () => {})
  });
}

async function seedDB(losers) {
  try {
    await createLosers(losers);
  } catch (e) {
    console.error(e);
  } finally {
    console.log(chalk.green('Successfully seeded losers data to database'));
    await prisma.$disconnect();
  }
}

// getSchedule();

export default {
  getSchedule,
};
