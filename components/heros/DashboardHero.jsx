import { getStartingWeek } from '@/utils/dates';

const DashboardHero = ({ user }) => {
  return (
    <div className="rounded-xl border border-gray-700 items-center font-bold flex flex-row bg-[#17263e]">
      <div className=" p-5 w-full">
        <div className="max-w-[800px]">
          <h1 className="text-2xl font-bold mb-5">{user.name}'s dashboard</h1>

          <div className="flex flex-col gap-2">
            <h2 className="font-normal">
              There is a total of 9 users with 19 entries which makes the prize
              pool $950
            </h2>

            <h2 className="font-normal">
              Once you buyin you will be able to make your picks{' '}
            </h2>

            <h2>Please make sure to read the rules!</h2>

            <h2 className="text-blue-500 font-normal">
              ***
              <span className="font-bold">
                It is currently week {getStartingWeek() + 1}{' '}
              </span>
              . Please note you must make your picks on Thursday before 6pm CST
              (7pm EST) for week {getStartingWeek() + 1}.{' '}
              <span className="font-bold">
                Even if you are not picking the thursday game
              </span>
              .***
            </h2>
          </div>
        </div>
      </div>

      <video
        src="/media/nfl02.mp4"
        className="h-80 rounded-xl"
        autoPlay
        loop
      ></video>
    </div>
  );
};
export default DashboardHero;
