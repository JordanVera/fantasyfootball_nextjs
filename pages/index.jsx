import HomepageHero from '@/components/heros/HomepageHero';
import Cards from '@/components/homepage/Cards';
import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { TracingBeamDemo } from '@/components/TracingBeamDemo';
import { TracingBeam } from '@/components/ui/tracing-beam';

export default function Home() {
  return (
    <main>
      <HomepageHero />
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
      <SignupCTA />
      <SignupCTA />
    </div>
  );
}
