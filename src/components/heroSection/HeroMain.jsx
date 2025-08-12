import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col  max-w-[85%] mx-auto justify-between items-center relative sm:py-3 lg:py-7 gap-20  ">
        <div className="flex flex:column items-center justify-between absolute opacity-20 md:hidden">
          <div className="flex flex:row items-center justify-between absolute gap-[60px] -mt-[90px] ml-[55px]">
            <h1 className="sm:text-[#398793]  font-black  text-[80px] ml-[35px]">UI</h1>
            <h1 className="sm:text-[#398793]  font-black  text-[80px] ml-[20px]">UX</h1>
          </div >
          <h1 className="sm:text-[#398793]  font-black  text-[80px] mt-[70px] ml-[15px]">DESINGER</h1>
        </div>

        
        <HeroPic />
        <HeroText />
        
      </div>
    </div>
  );
};

export default HeroMain;
