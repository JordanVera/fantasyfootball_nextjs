import moment from 'moment';

// Dates are 1 hour ahead of central time, use eastern time.
const dates = [
  moment('2024-02-09T23:16'), // WEEK 1 NFL (Thursday September 9th, 7:20pm CDT)
  moment('2024-09-12T02:55'), // WEEK 2 NFL (Thursday September 16th, 7:20pm CDT)
  moment('2024-09-18T02:55'), // WEEK 3 NFL (Thursday September 23rd, 7:20pm CDT)
  moment('2024-09-20T02:55'), // WEEK 4 NFL (Thursday September 30th, 7:20pm CDT)
  moment('2024-10-20T02:55'), // WEEK 5 NFL (Thursday October 7th, 7:20pm CDT)
  moment('2024-10-20T02:55'), // WEEK 6 NFL (Thursday October 14th, 7:20pm CDT)
  moment('2024-10-20T02:55'), // WEEK 7 NFL (Thursday October 21st, 7:20pm CDT)
  moment('2024-10-20T02:55'), // WEEK 8 NFL (Thursday October 28th, 7:20pm CDT)
  moment('2024-11-20T02:55'), // WEEK 9 NFL (Thursday November 4th, 7:20pm CDT)
  moment('2024-11-20T02:55'), // WEEK 10 NFL (Thursday November 11th, 7:20pm CDT)
  moment('2024-11-20T02:55'), // WEEK 11 NFL (Thursday November 18th, 7:20pm CDT)
  moment('2024-11-20T02:55'), // WEEK 12 NFL (Thursday November 25th, 7:20pm CDT)
  moment('2024-12-20T02:55'), // WEEK 13 NFL (Thursday December 2nd, 7:20pm CDT)
  moment('2024-12-20T02:55'), // WEEK 14 NFL (Thursday December 9th, 7:20pm CDT)
  moment('2024-12-20T02:55'), // WEEK 15 NFL (Thursday December 16th, 7:20pm CDT)
  moment('2024-12-20T02:55'), // WEEK 16 NFL (Thursday December 23rd, 7:20pm CDT)
  moment('2025-01-20T02:55'), // WEEK 17 NFL (Sunday January 2nd, 12:00pm CDT)
  moment('2025-01-20T02:55'), // WEEK 18 NFL (Sunday January 9nd, 12:00pm CDT)
];

const getAvailableWeeks = (all) => {
  const startingWeek = getStartingWeek();

  const weeks = new Array(22)
    .fill(0)
    // .map((_, index) => index + 1)
    .filter((week) => week >= startingWeek);
  return weeks;
};

// const nflSeasonStart = moment(process.env.SEASON_START_DATE); // SEASON START
const getStartingWeek = () => {
  const now = moment();

  const startingWeek = dates.findIndex((date) => {
    const startInHours = date.diff(now, 'hour');
    return startInHours > 0;
  });

  return startingWeek;
};

// console.log('dates', dates);
// console.log('getStartingWeek()', getStartingWeek());

module.exports = {
  getAvailableWeeks,
  getStartingWeek,
};
