const DashboardHero = ({ user }) => {
  return (
    <div className="bg-gray-900 p-10 flex flex-col gap-5 rounded-lg w-96 mx-auto">
      <h1 className="text-2xl font-bold">{user.name}'s dashboard</h1>

      <h2>
        There is a total of 9 users with 19 entries which makes the prize pool
        $950
      </h2>

      <h2>Once you buyin you will be able to make your picks</h2>

      <h2>Please make sure to read the rules!</h2>

      <h2 className="text-orange-500">
        ***Please note you must make your pick on Thursday before 6pm CST (7pm
        EST) for every bullet. Even if you are not picking the thursday game.***
      </h2>
    </div>
  );
};
export default DashboardHero;
