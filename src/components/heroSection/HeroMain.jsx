import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col  max-w-[85%] mx-auto justify-between items-center relative sm:py-3 lg:py-7 gap-20  ">
        
        <HeroPic />
        <HeroText />
        
      </div>
    </div>
  );
};

export default HeroMain;
