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
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 text-primary"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-col lg:flex-row">
          <div
            className="w-full lg:w-1/3 hidden  bg-gray-900 rounded-l-lg lg:flex items-center justify-center p-5"
            style={{
              backgroundImage: "url('/images/mahomes.jpg')",
              backgroundSize: 'cover',

              opacity: 0.7,
            }}
          ></div>

          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-5 bg-[#ff4d00] rounded-lg lg:rounded-l-none p-5">
            <h2 className="font-bold text-3xl text-left">
              What Is NFL Last Longer
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              temporibus deserunt? Debitis quibusdam voluptatibus dolore,
              delectus quo, quia totam cum adipisci aperiam commodi nulla ea
              necessitatibus dignissimos. Eligendi tenetur eius suscipit
              perspiciatis iste optio reprehenderit itaque quod cum amet?
              Temporibus odio velit perspiciatis libero impedit autem distinctio
              accusantium perferendis accusamus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              voluptatibus provident et nesciunt nostrum in pariatur eligendi
              quam. Saepe, nemo?
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
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-10 text-primary"
        initial={{ opacity: 0 }} // Start from transparent
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-5 bg-[#5551ff] rounded-lg lg:rounded-r-none p-5">
            <h2 className="font-bold text-3xl text-left">How to Play</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              temporibus deserunt? Debitis quibusdam voluptatibus dolore,
              delectus quo, quia totam cum adipisci aperiam commodi nulla ea
              necessitatibus dignissimos. Eligendi tenetur eius suscipit
              perspiciatis iste optio reprehenderit itaque quod cum amet?
              Temporibus odio velit perspiciatis libero impedit autem distinctio
              accusantium perferendis accusamus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              voluptatibus provident et nesciunt nostrum in pariatur eligendi
              quam. Saepe, nemo?
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
