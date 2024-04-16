import HomepageHero from '@/components/heros/HomepageHero';
import Cards from '@/components/homepage/Cards';
import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { TracingBeamDemo } from '@/components/TracingBeamDemo';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { HeroHighlightDemo } from '@/components/heros/HeroHighlightDemo';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import { Button } from '@material-tailwind/react';

export default function Home() {
  return (
    <main>
      <HeroHighlightDemo />

      <div className=" flex flex-col-reverse md:flex-row  m-5">
        <div className="flex flex-col gap-5 p-10 rounded-b-lg lg:rounded-l-lg md:rounded-br-none w-full lg:w-1/4 bg-[#ff4d00]">
          <div className="flex flex-row justify-center border bg-white text-black rounded-full w-[60px] px-2 py-1">
            <p>Hello</p>
          </div>

          <div className="mb-14">
            <h2 className="text-3xl text-black font-bold">Entry</h2>
            <p className="text-black">$60</p>
          </div>

          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            eligendi?
          </p>

          <Button
            className="flex flex-row items-center justify-center gap-3 border border-black rounded-full capitalize w-32"
            variant="outlined"
          >
            <p>Signup</p>
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </div>

        <div
          className="min-h-[200px] rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg w-full lg:w-3/4 bg-[#d7d7d7] bg-center bg-cover "
          bg-opacity-50
          style={{
            backgroundImage: "url('/images/billsStadium.jpg')",
            opacity: 0.7,
          }}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row m-5 gap-10">
        {/* STEP ONE */}
        <div className="flex flex-col-reverse xl:flex-row w-full lg:w-1/3">
          <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start gap-8 bg-[#5551ff] p-5 lg:p-10 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none">
            <div className=" flex flex-row  bg-black text-white rounded-full h-8 px-2 py-1">
              <p className="mx-auto text-center">Step 1</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl lg:text-3xl text-white font-bold">
                Sign Up
              </h2>

              <p className="text-xs lg:text-sm">
                Sign Up When the game opens, create an account by visiting our
                sign in page.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#d7d7d7] p-10 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none">
            {' '}
            <Image
              src="/players/obj.png"
              height={200}
              width={200}
              alt="odell beckham jr"
            />
          </div>
        </div>
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
