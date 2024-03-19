import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from '@material-tailwind/react';
import { useUser } from '@/context/UserContext';

import GavelIcon from '@mui/icons-material/Gavel';

export default function RulesDialog() {
  const { handleOpenRulesDialog, openRulesDialog } = useUser();

  return (
    <>
      <Button
        onClick={handleOpenRulesDialog}
        size="sm"
        className="bg-gradient-to-b from-gray-700 to-gray-900 group relative flex items-center  overflow-hidden px-3 py-3 capitalize"
      >
        <div className="pr-12">Read the Rules</div>
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-gray-900 transition-colors ">
          <GavelIcon />
        </span>
      </Button>

      <Dialog
        open={openRulesDialog}
        handler={handleOpenRulesDialog}
        className="bg-white dark:bg-black  overflow-y-auto h-96"
        size="sm"
      >
        <DialogHeader className=" capitalize text-primary">
          Tournament Rules
        </DialogHeader>
        <DialogBody>
          <ol className="list-decimal list-inside flex flex-col gap-3 text-primary">
            <li>Participation in the last longer is $60 per entry.</li>
            <li>
              The payout percentages are as follows - 90% to the winner and 10%
              to 2nd place.
            </li>
            <li>
              Pick the outright WINNER (no point spreads) for one NFL game each
              week.
            </li>
            <li>You must make a selection each week.</li>
            <li>
              A team may only be selected once during the regular season (for
              example, if you pick the Chiefs in week 1, you may not select the
              Chiefs again for the remainder of the regular season). Slates are
              wiped clean for the playoffs. If the pool continues into the
              playoffs, you can use each team one more time.
            </li>
            <li>
              You continue in the pool until a loss (or tie) is suffered, then
              you're out. YES, TIES ARE LOSSES!
            </li>
            <li>
              PICKS MUST BE SUBMITTED BY 7PM ET THURSDAYS (This is REGARDLESS of
              whether you are picking the Thursday game or not). There is a
              Thursday night game just about every week this season. Any pick
              not submitted by the deadline will be considered a loss and the
              contestant will be eliminated from the pool. It is possible (and
              recommended) to submit picks for future weeks. Visit the site
              early in the week, or the previous week, and make your pick. Then
              come back later and change it if necessary.
            </li>
            <li>
              At about Week 15 or Week 16, the NFL stops having Thursday games.
              The actual week changes from season to season. At that time the
              pick deadline will change to Friday evening at 11:59pm ET for the
              rest of the season, and during the Playoffs.
            </li>
            <li>
              You must double-check that your picks have been recorded on the
              website properly AFTER you have submitted your pickss from your
              cell phone, tablet or computer.
            </li>
            <li>
              Your official picks are the picks displayed in the table with your
              screen name next to them.
            </li>
            <li>
              The game will continue until one contestant remains. However, via
              mutual consent, the pool may end at any time, with the prize split
              among the remaining participants.
            </li>
            <li>
              If all remaining contestants are eliminated in the same week, the
              contest is over, and the contestants that were eliminated in that
              week are ALL declared winners and will split the prize. However,
              the contest could be continued by unanimous consent of the
              'winners' and NFL Last Longer administration.
            </li>
            <li>
              If the REGULAR season ends with no outright winner, AND there has
              been no previous split, the pot will be cut in half. 50% will be
              evenly distributed among the remaining players, and the other 50%
              will become the new, winner-take-all, pot that will be played for
              in the playoffs.
            </li>
            <li>
              If the contest continues into the playoffs, and advances to the
              Superbowl, and a player no longer has any valid picks left to
              pick, because he has previously used both of the teams that are
              playing in the Superbowl, that player is considered to have
              finished better than a player who lost in the previous round, but
              worse than a player who picks the losing team in the Superbowl.
            </li>
            <li>
              There might arise situations that are not spelled out specifically
              in these rules. In those cases, I will make my decisions as fairly
              as possible, taking into account the general principles of the
              pool, as well as the specific details of each case. My decisions
              are final.
            </li>
            <li>
              All prizes will be sent out upon completion of the pool, winners
              are paid in CRYPTOCURRENCY. Please allow 2-4 weeks for delivery.
            </li>
          </ol>
        </DialogBody>
      </Dialog>
    </>
  );
}
