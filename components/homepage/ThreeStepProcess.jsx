import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ThreeStepProcess = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-5 gap-5 h-full">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

const StepOne = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col-reverse xl:flex-row w-full h-full"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
      >
        <div className="flex flex-row-reverse lg:flex-col justify-center items-end lg:items-start gap-8 bg-[#5551ff] p-5 lg:p-8 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none">
          <div className=" bg-black text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 1</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Sign Up
            </h2>

            <p className="text-xs lg:text-sm">
              Sign up when the game opens, create an account by visiting our
              sign in page.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none"
          // bg-opacity-50
          style={{
            backgroundImage: "url('/images/1.jpg')",
            backgroundSize: 'cover',
            opacity: 0.7,
          }}
        >
          {' '}
        </div>
      </motion.div>
    </div>
  );
};

const StepTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col-reverse xl:flex-row w-full h-full"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
      >
        <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start justify-center gap-8 bg-[#00cc66] p-5 lg:p-8 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none">
          <div className=" bg-black text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 2</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Make Picks
            </h2>

            <p className="text-xs lg:text-sm">
              Pick one NFL team to win each week, no points spread.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none"
          style={{
            backgroundImage: "url('/images/2.jpg')",
            backgroundSize: 'cover',
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </div>
  );
};

const StepThree = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col-reverse xl:flex-row w-full h-full"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
      >
        <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start justify-center gap-8 bg-[#fe5f55] p-5 lg:p-8 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none">
          <div className=" bg-black text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 3</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Advance
            </h2>

            <p className="text-xs lg:text-sm">
              Get it right and advance to the next week. Get it wrong and you're
              out.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none"
          // bg-opacity-50
          style={{
            backgroundImage: "url('/images/3.jpg')",
            backgroundSize: 'cover',
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </div>
  );
};

const StepFour = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col-reverse xl:flex-row w-full h-full"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
      >
        <div className="flex flex-row-reverse lg:flex-col items-end lg:items-start justify-center gap-8 bg-[#6930c3] p-5 lg:p-8 w-full xl:w-1/2 rounded-b-lg  xl:rounded-tl-lg xl:rounded-bl-lg xl:rounded-r-none">
          <div className=" bg-black text-white  rounded-full h-8 px-2 py-1 min-w-[80px]">
            <p className="mx-auto text-center">Step 4</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              Advance
            </h2>

            <p className="text-xs lg:text-sm">
              Get it right and advance to the next week. Get it wrong and you're
              out.
            </p>
          </div>
        </div>

        <div
          className="min-h-[300px] flex flex-col justify-center items-center bg-gray-900 p-5 lg:p-8 w-full xl:w-1/2 rounded-t-lg  xl:rounded-tr-lg xl:rounded-br-lg xl:rounded-l-none"
          // bg-opacity-50
          style={{
            backgroundImage: "url('/images/3.jpg')",
            backgroundSize: 'cover',
            opacity: 0.7,
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default ThreeStepProcess;