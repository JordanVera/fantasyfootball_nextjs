'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/components/Logo';

const RulesPage = () => {
  const rules = [
    'Participation in the last longer is $60 per entry.',
    'The payout percentages are as follows - 90% to the winner and 10% to 2nd place.',
    'Pick the outright WINNER (no point spreads) for one NFL game each week.',
    'You must make a selection each week.',
    'A team may only be selected once during the regular season (for example, if you pick the Chiefs in week 1, you may not select the Chiefs again for the remainder of the regular season). Slates are wiped clean for the playoffs. If the pool continues into the playoffs, you can use each team one more time.',
    "You continue in the pool until a loss (or tie) is suffered, then you're out. YES, TIES ARE LOSSES!",
    'PICKS MUST BE SUBMITTED BY 7PM ET THURSDAYS (This is REGARDLESS of whether you are picking the Thursday game or not). There is a Thursday night game just about every week this season. Any pick not submitted by the deadline will be considered a loss and the contestant will be eliminated from the pool. It is possible (and recommended) to submit picks for future weeks. Visit the site early in the week, or the previous week, and make your pick. Then come back later and change it if necessary.',
    'At about Week 15 or Week 16, the NFL stops having Thursday games. The actual week changes from season to season. At that time the pick deadline will change to Friday evening at 11:59pm ET for the rest of the season, and during the Playoffs.',
    'You must double-check that your picks have been recorded on the website properly AFTER you have submitted your pickss from your cell phone, tablet or computer.',
    'Your official picks are the picks displayed in the table with your screen name next to them.',
    'The game will continue until one contestant remains. However, via mutual consent, the pool may end at any time, with the prize split among the remaining participants.',
    "If all remaining contestants are eliminated in the same week, the contest is over, and the contestants that were eliminated in that week are ALL declared winners and will split the prize. However, the contest could be continued by unanimous consent of the 'winners' and NFL Last Longer administration.",
    'If the REGULAR season ends with no outright winner, AND there has been no previous split, the pot will be cut in half. 50% will be evenly distributed among the remaining players, and the other 50% will become the new, winner-take-all, pot that will be played for in the playoffs.',
    'If the contest continues into the playoffs, and advances to the Superbowl, and a player no longer has any valid picks left to pick, because he has previously used both of the teams that are playing in the Superbowl, that player is considered to have finished better than a player who lost in the previous round, but worse than a player who picks the losing team in the Superbowl.',
    'There might arise situations that are not spelled out specifically in these rules. In those cases, I will make my decisions as fairly as possible, taking into account the general principles of the pool, as well as the specific details of each case. My decisions are final.',
    'All prizes will be sent out upon completion of the pool, winners are paid in CRYPTOCURRENCY. Please allow 2-4 weeks for delivery.',
  ];

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="p-6 bg-gradient-to-br from-red-500 to-orange-600">
            <h1 className="text-3xl font-bold text-center text-primary">
              NFL Last Longer Rules
            </h1>
            <div className="flex justify-center">
              <Logo height={160} width={160} />
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-6 h-6 mt-1 mr-2 text-green-500 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-primary">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
