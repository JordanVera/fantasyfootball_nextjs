// import { all, get } from 'axios';
// const { MongoClient } = require('mongodb');
import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';

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
  console.log(process.env.API_KEY);
  console.log(process.env.SEASON);

  return new Promise((resolve, reject) => {
    const requests = [];
    for (let week = 1; week <= 21; week++) {
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
            const weekN = `week${i + 1}`;
            const winnerWeek = winners[weekN];
            const loserWeek = losers[weekN];

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

          console.log(chalk.green('WINNERS OBJECT'));
          console.log(winners);
          console.log(chalk.red('LOSERS OBJECT'));
          console.log(losers);

          resolve({ winners, losers });
        })
      )
      .catch((err) => {
        console.log(chalk.red(err.response.data.message));
        console.log(chalk.red(err.response.statusText));
      });
  });
}

getSchedule();

function getWinnnersLosers() {
  return {
    winners,
    losers,
  };
}

// getSchedule();

export default {
  getSchedule,
  getWinnnersLosers,
};
