import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Abhishek Kanade</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          B.Tech IT Student | Web Developer | React, Redux Toolkit | Git & GitHub  <br className='sm:block hidden' />
          | DSA Enthusiast | Problem Solver | Eager to Drive Innovation in Tech 🚀
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <HeroImage></HeroImage>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;