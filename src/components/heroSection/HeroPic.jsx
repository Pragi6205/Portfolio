import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { pic } from "../../public/images/Profile_color1.png";


const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src={pic}
        className="lg:max-h-[1000px] grayscale hover:grayscale-0  hover:scale-[101%] transition-all duration-500 lg:w-auto w-auto max-h-[800px] "
      />
    </motion.div>
  );
};

export default HeroPic;
