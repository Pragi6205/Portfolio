/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center opacity-90">
      
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-7xl sm:text-3xl font-bold uppercase -mt-10"
      >
       
        <br />
        <h1 className="text-grey hover:text-[#398793] sm:text-[#398793] transition-all duration-500">CREATIVITY <span className="text-white">fuels</span></h1>
        <h1>innovation, design shapes it.</h1>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl mt-4"
      >
        I'm <span className="text-grey font-bold text-2xl hover:text-[#377781] transition-all duration-500 sm:text-[#398793]">PRAGHADEESH</span> and I'm Here to Make it
      </motion.p>
    </div>
  );
};

export default HeroText;
