import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className="mx-auto max-w-[900px] flex flex-col gap-5 my-10">
      <h2 className="font-bold text-3xl text-center">
        What Is NFL Last Longer
      </h2>

      <div className="flex flex-row gap-10">
        <div className="w-1/3">
          <img
            src="/images/logo.png"
            // height={200}
            // width={200}
            alt="odell beckham jr"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-5">
          <p>
            NFL Last Longer is the first and only exclusively cryptocurrency
            survivor league style pool for the National Football League. The
            objective is to pick one NFL team to win each week, no Vegas points
            spread, and you cannot pick the same team more than once through out
            the season. We take pride in being innovators in this field by
            supporting cryptocurrency EXCLUSIVELY.{' '}
          </p>
          <p>
            Once you make an account you will have access to the dashboard by
            signing in, this is where you can buy into the last longer and make
            your weekly picks! Please make sure to pick a solid password. Once
            you are logged into the account you can reset your password,
            unfortunately you cannot reset your password while not logged out.{' '}
          </p>
          <p>
            Each user is allowed up to 20 entries, which should give you plenty
            of attempts at going long and out lasting the entire pool, good
            luck! We hope we have created an awesome app for our users but if
            you have any suggestions you can always contact us and we'd be happy
            to hear your feedback.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;