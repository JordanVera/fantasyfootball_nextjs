import { useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import useDetectScroll from '@smakss/react-scroll-direction';
import Link from 'next/link';
const SignupCTA = () => {
  const { scrollDir, scrollPosition } = useDetectScroll();
  const scrollDirection = useScrollDirection();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref}>
      <Link
        href={'/login'}
        className="hover:scale-105 duration-300 cursor-pointer"
      >
        <motion.div
          className="bg-black rounded-lg flex flex-col-reverse md:flex-row m-5"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, bounce: 0.7 }}
        >
          <div className="flex flex-col gap-5 p-10 rounded-b-lg lg:rounded-l-lg md:rounded-br-none w-full lg:w-1/4 bg-[#ffff3f]">
            <div className="flex flex-row justify-center border bg-white text-black rounded-full w-[60px] px-2 py-1">
              <p>Hello</p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl text-black font-bold">Entry</h2>
              <p className="text-black">$60</p>
            </div>

            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              eligendi?
            </p>

            <Button
              className="flex flex-row items-center justify-center gap-3 border border-black rounded-full capitalize w-32"
              variant="outlined"
            >
              <p>Signup</p>
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </div>

          <div
            className="bg-black min-h-[200px] rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg w-full lg:w-3/4 bg-center bg-cover "
            // bg-opacity-50
            style={{
              backgroundImage: "url('/images/billsStadium.jpg')",
              opacity: 0.7,
            }}
          ></div>
        </motion.div>
      </Link>
    </div>
  );
};
export default SignupCTA;
