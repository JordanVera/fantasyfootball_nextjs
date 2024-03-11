import HomepageHero from '@/components/heros/HomepageHero';
import Cards from '@/components/homepage/Cards';
import SignupCTA from '@/components/homepage/SignupCTA';
import WhatWeDo from '@/components/homepage/WhatWeDo';

export default function Home() {
  return (
    <main>
      <HomepageHero />

      <div className="mx-auto">
        <WhatWeDo />
        <Cards />
        <SignupCTA />
      </div>
    </main>
  );
}
