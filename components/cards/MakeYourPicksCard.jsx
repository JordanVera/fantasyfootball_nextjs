const MakeYourPicksCard = ({ user }) => {
  return (
    <div className="rounded-xl border border-gray-700 items-center font-bold flex flex-row bg-[#17263e]">
      <div className=" p-5 ">
        <h1 className="text-2xl font-bold">{user.name}'s dashboard</h1>

        <h2>
          There is a total of 9 users with 19 entries which makes the prize pool
          $950
        </h2>

        <h2>Once you buyin you will be able to make your picks</h2>

        <h2>Please make sure to read the rules!</h2>

        <h2 className="text-orange-500 ">
          ***Please note you must make your pick on Thursday before 6pm CST (7pm
          EST) for every bullet.{' '}
          <span className="font-bold">
            Even if you are not picking the thursday game
          </span>
          .***
        </h2>
      </div>

      <video
        src="/media/nfl02.mp4"
        className="h-64 rounded-xl"
        autoPlay
        loop
      ></video>
    </div>
  );
};
export default MakeYourPicksCard;
