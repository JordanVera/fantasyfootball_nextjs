// import { all, get } from 'axios';
// const { MongoClient } = require('mongodb');
import chalk from 'chalk';

import axios from 'axios';

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
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    all([
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/1?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/2?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/3?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/4?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/5?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/6?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/7?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/8?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/9?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/10?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/11?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/12?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/13?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/14?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/15?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/16?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/17?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/18?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/19?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/20?key=${process.env.API_KEY}`
      ),
      get(
        `https://fly.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${process.env.SEASON}/21?key=${process.env.API_KEY}`
      ),
    ])
      .then((responseArr) => {
        for (let i = 0; i < 18; i++) {
          const weekN = `week${i + 1}`;
          const winnerWeek = winners[weekN];
          const loserWeek = losers[weekN];

          responseArr[i].data.forEach((element) => {
            console.log(element);

            if (element.AwayScore > element.HomeScore) {
              // console.log(chalk.red('Away team won'));
              winnerWeek.push(element.AwayTeam);
              loserWeek.push(element.HomeTeam);
            } else if (element.AwayScore === element.HomeScore) {
              // console.log(chalk.blue('Game was a tie, both teams lost'));
              loserWeek.push(element.HomeTeam);
              loserWeek.push(element.AwayTeam);
            } else {
              // console.log(chalk.green('Home Team won'));
              winnerWeek.push(element.HomeTeam);
              loserWeek.push(element.AwayTeam);
            }
          });
        }

        console.log(chalk.green('WINNERS OBJECT'));
        console.log(winners);
        console.log(chalk.red('LOSERS OBJECT'));
        console.log(losers);

        resolve({ winners, losers });
      })
      .catch((err) => console.log(err.response.data.message));
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
