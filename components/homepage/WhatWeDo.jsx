import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <div className="mx-auto flex flex-col gap-5 m-5">
      <One />
      <Two />
    </div>
  );
};

const One = (_) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 text-primary  rounded-xl"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-row gap-5 lg:flex-row  rounded-xl">
          <div
            className="relative w-full lg:w-1/3 hidden rounded-xl lg:flex items-center justify-center p-5 border dark:border-gray-800 border-gray-500"
            style={{
              backgroundImage: "url('/images/mahomes.jpg')",
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-10"></div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-5 bg-gradient-to-tr from-red-500 to-orange-600 rounded-xl p-5 border dark:border-gray-800 border-gray-500">
            <h2 className="font-bold text-3xl text-left text-white">
              What Is NFL Last Longer
            </h2>
            <p className="text-white">
              NFL Last Longer is a thrilling survivor league that tests your
              predictiveness in the world of professional football. Each week,
              you're tasked with selecting a team that you believe will win its
              game, straight-up, no points spread involved. But choose wisely
              because once you pick a team, you cannot use them again for the
              remainder of the season.
            </p>
            <p className="text-white">
              This unique challenge requires strategic foresight and a deep
              understanding of each team’s weekly matchups. Can you outlast
              other competitors and emerge as the Last Longer champion?
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Two = (_) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-10 text-primary  rounded-xl"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-row gap-5  lg:flex-row rounded-xl">
          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-5 bg-gradient-to-bl from-purple-500 to-purple-900 rounded-xl p-5 border dark:border-gray-800 border-gray-500">
            <h2 className="font-bold text-3xl text-left text-white">
              How to Play
            </h2>
            <p className="text-white">
              Getting started in NFL Last Longer is simple. First, register and
              create your entry. Each week, before the designated cutoff time,
              select one NFL team to win their game outright. The key to victory
              is not just choosing correctly but planning ahead. Once a team is
              selected, it’s off your board for the season.
            </p>
            <p className="text-white">
              Make your picks carefully: a wrong choice and you're out of the
              competition! Stay sharp, watch the games, and prepare your
              strategies to survive until the end. Are you ready to take on the
              challenge?
            </p>
          </div>

          <div
            className="relative w-full lg:w-1/3 hidden rounded-xl lg:flex items-center justify-center p-5 border dark:border-gray-800 border-gray-500"
            style={{
              backgroundImage: "url('/images/bigTruss.jpg')",
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-10"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
