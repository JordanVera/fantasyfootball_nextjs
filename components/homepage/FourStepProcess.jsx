import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

const FourStepProcess = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-5 gap-5 h-full">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

// bg-[#5551ff]
// bg-[#00cc66]
// bg-[#fe5f55]
// bg-[#6930c3]

const StepOne = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { setIsSignUp } = useUser();

  return (
    <Link
      ref={ref}
      href={'/login'}
      className="cursor-pointer"
      onClick={() => setIsSignUp(true)}
    >
      <motion.div
        className="bg-black rounded-xl flex flex-col-reverse xl:flex-row w-full h-full border border-gray-500 dark:border-gray-800 group overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, slideIn: 0.3 }}
      >
        <div className="flex flex-row-reverse lg:flex-col justify-center items-end lg:items-start gap-8  bg-gradient-to-br from-red-500 to-orange-600 p-5 lg:p-8 w-full xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none z-50">
          <div className="bg-black text-white rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 1</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Sign Up
            </h2>

            <p className="text-xs lg:text-sm text-white">
              Sign up when the game opens, create an account by visiting our
              sign in page.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] h-full flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-xl xl:rounded-tr-xl xl:rounded-br-xl xl:rounded-l-none bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          style={{
            backgroundImage: "url('/images/1.jpg')",
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </Link>
  );
};

const StepTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Link ref={ref} href={'/login'} className="cursor-pointer">
      <motion.div
        className="bg-black rounded-xl flex flex-col-reverse xl:flex-row w-full h-full border border-gray-500 dark:border-gray-800 group overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, slideIn: 0.3 }}
      >
        <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start justify-center gap-8  bg-gradient-to-br from-purple-500 to-purple-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none z-50">
          <div className="bg-black text-white rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 2</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Make Picks
            </h2>

            <p className="text-xs lg:text-sm text-white">
              Pick one NFL team to win each week, no points spread.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] h-full flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-xl xl:rounded-tr-xl xl:rounded-br-xl xl:rounded-l-none bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          style={{
            backgroundImage: "url('/images/jettas.jpeg')",
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </Link>
  );
};

const StepThree = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Link ref={ref} href={'/login'} className="cursor-pointer">
      <motion.div
        className="bg-black rounded-xl flex flex-col-reverse xl:flex-row w-full h-full border border-gray-500 dark:border-gray-800 group overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, slideIn: 0.3 }}
      >
        <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start justify-center gap-8  bg-gradient-to-br from-blue-500 to-blue-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-b-xl xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none z-50">
          <div className="bg-black text-white rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 3</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Advance
            </h2>

            <p className="text-xs lg:text-sm text-white">
              Get it right and advance to the next week. Get it wrong and you're
              out.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] h-full flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-xl xl:rounded-tr-xl xl:rounded-br-xl xl:rounded-l-none bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          style={{
            backgroundImage: "url('/images/3.jpg')",
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </Link>
  );
};

const StepFour = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Link ref={ref} href={'/login'} className=" cursor-pointer">
      <motion.div
        className="bg-black rounded-xl flex flex-col-reverse xl:flex-row w-full h-full border border-gray-500 dark:border-gray-800 group overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, slideIn: 0.3 }}
      >
        <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start justify-center gap-8  bg-gradient-to-br from-green-500 to-green-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-b-xl  xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-r-none z-50">
          <div className=" bg-black text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 4</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Do it Again
            </h2>

            <p className="text-xs lg:text-sm text-white">
              Repeat this until only one person remains or the season ends with
              multiple players.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] h-full flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-xl  xl:rounded-tr-xl xl:rounded-br-xl xl:rounded-l-none transition-transform duration-300 ease-in-out  group-hover:scale-105"
          // bg-opacity-50
          style={{
            backgroundImage: "url('/images/ar12.jpg')",
            backgroundSize: 'cover',

            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </Link>
  );
};

export default FourStepProcess;
