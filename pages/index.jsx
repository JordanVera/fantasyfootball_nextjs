import HomepageHero from '@/components/heros/HomepageHero';
import Cards from '@/components/homepage/Cards';
import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { TracingBeamDemo } from '@/components/TracingBeamDemo';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { HeroHighlightDemo } from '@/components/heros/HeroHighlightDemo';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import { Button } from '@material-tailwind/react';

export default function Home() {
  return (
    <main>
      <HeroHighlightDemo />

      <div className=" flex flex-row  m-5">
        <div className="flex flex-col gap-5 p-5 rounded-l-lg w-1/4 bg-orange-700">
          <div className="flex flex-row justify-center border bg-white text-black rounded-full w-[60px] px-2 py-1">
            <p>Hello</p>
          </div>

          <div>
            <h2 className="text-3xl text-black font-bold">Entry</h2>
            <p className="text-black">$60</p>
          </div>

          <Button
            className="flex flex-row items-center justify-center gap-3 border border-black rounded-full capitalize"
            variant="outlined"
          >
            <p>Signup</p>
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </div>

        <div
          className="rounded-r-lg w-3/4 bg-white bg-center bg-cover bg-opacity-50"
          style={{
            backgroundImage: "url('/images/billsStadium.jpg')",
            opacity: 0.7,
          }}
        ></div>
      </div>
      {/* <HomepageHero /> */}
      {/* <TracingBeamDemo /> */}

      <TracingBeam children={<Child />} />
    </main>
  );
}

function Child() {
  return (
    <div className="mx-auto">
      <WhatWeDo />
      {/* <Cards /> */}
      <SignupCTA />
    </div>
  );
}
