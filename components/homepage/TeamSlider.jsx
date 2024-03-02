import Image from 'next/image';

const TeamSlider = ({ direction }) => {
  const teamLogos = [
    '/images/teamLogos/bears.png',
    '/images/teamLogos/bengals.png',
    '/images/teamLogos/bills.png',
    '/images/teamLogos/broncos.png',
    '/images/teamLogos/buccs.png',
    '/images/teamLogos/cardinals.png',
    '/images/teamLogos/chargers.png',
    '/images/teamLogos/chiefs.png',
    '/images/teamLogos/cleveland.png',
    '/images/teamLogos/colts.png',
    '/images/teamLogos/dallas.png',
    '/images/teamLogos/dolphins.png',
    '/images/teamLogos/eagles.png',
    '/images/teamLogos/falcons.png',
    '/images/teamLogos/footballTeam.png',
    '/images/teamLogos/giants.png',
    '/images/teamLogos/jaguars.png',
    '/images/teamLogos/jets.png',
    '/images/teamLogos/lions.png',
    '/images/teamLogos/niners.png',
  ];

  const animationClass =
    direction === 'left'
      ? 'animate-slideLeftToRight'
      : 'animate-slideRightToLeft';

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex flex-nowrap gap-10 ${animationClass} animation-linear animation-infinite`}
      >
        {teamLogos.map((teamLogo, index) => (
          <Image
            src={teamLogo}
            key={index}
            alt="team logo"
            width={80}
            height={80}
            unoptimized={true}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
