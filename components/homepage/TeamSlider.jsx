import Image from 'next/image';

const TeamSlider = ({ direction, teamLogos }) => {
  const duplicateLogos = [...teamLogos, ...teamLogos];

  const animationClass =
    direction === 'left'
      ? 'animate-slideLeftToRight'
      : 'animate-slideRightToLeft';

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex flex-nowrap gap-10 ${animationClass} animation-linear animation-infinite slider`}
      >
        {duplicateLogos.map((teamLogo, index) => (
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
