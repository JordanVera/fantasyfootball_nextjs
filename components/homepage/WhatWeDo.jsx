import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <div className="mx-auto flex flex-col gap-5 m-5">
      <One />
      <Two />
      {/* <Three /> */}
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
        className="flex flex-col md:flex-row items-center gap-10 text-primary border dark:border-gray-800 border-gray-500 rounded-lg"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-col lg:flex-row bg-black rounded-lg">
          <div
            className="w-full lg:w-1/3 hidden  bg-gray-900 rounded-l-lg lg:flex items-center justify-center p-5"
            style={{
              backgroundImage: "url('/images/mahomes.jpg')",
              backgroundSize: 'cover',

              opacity: 0.7,
            }}
          ></div>

          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-5 bg-[#ff4d00] rounded-lg lg:rounded-l-none p-5">
            <h2 className="font-bold text-3xl text-left text-black dark:text-white">
              What Is NFL Last Longer
            </h2>
            <p className="text-black dark:text-white">
              NFL Last Longer is a thrilling survivor league that tests your
              predictiveness in the world of professional football. Each week,
              you're tasked with selecting a team that you believe will win its
              game, straight-up, no points spread involved. But choose wisely
              because once you pick a team, you cannot use them again for the
              remainder of the season.
            </p>
            <p className="text-black dark:text-white">
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
        className="flex flex-col-reverse md:flex-row items-center gap-10 text-primary border dark:border-gray-800 border-gray-500 rounded-lg"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-col lg:flex-row bg-black rounded-lg">
          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-5 bg-[#5551ff] rounded-lg lg:rounded-r-none p-5">
            <h2 className="font-bold text-3xl text-left text-black dark:text-white">
              How to Play
            </h2>
            <p className="text-black dark:text-white">
              Getting started in NFL Last Longer is simple. First, register and
              create your entry. Each week, before the designated cutoff time,
              select one NFL team to win their game outright. The key to victory
              is not just choosing correctly but planning ahead. Once a team is
              selected, it’s off your board for the season.
            </p>
            <p className="text-black dark:text-white">
              Make your picks carefully: a wrong choice and you're out of the
              competition! Stay sharp, watch the games, and prepare your
              strategies to survive until the end. Are you ready to take on the
              challenge?
            </p>
          </div>

          <div
            className="w-full lg:w-1/3 hidden  bg-gray-900 rounded-r-lg lg:flex items-center justify-center p-5"
            style={{
              backgroundImage: "url('/images/green.jpg')",
              backgroundSize: 'cover',

              opacity: 0.7,
            }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

const Three = (_) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="w-1/3">
          <Image
            src="/players/baker.png"
            height={250}
            width={250}
            alt="odell beckham jr"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-5 text-primary">
          <h2 className="font-bold text-3xl text-left">
            Get in The Game and Win
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            temporibus deserunt? Debitis quibusdam voluptatibus dolore, delectus
            quo, quia totam cum adipisci aperiam commodi nulla ea necessitatibus
            dignissimos. Eligendi tenetur eius suscipit perspiciatis iste optio
            reprehenderit itaque quod cum amet? Temporibus odio velit
            perspiciatis libero impedit autem distinctio accusantium perferendis
            accusamus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus provident et nesciunt nostrum in pariatur eligendi
            quam. Saepe, nemo?
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
