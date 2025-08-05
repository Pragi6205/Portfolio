const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative ">
      <div className=" lg:h-[500px] h-[300px] w-[300px] rounded-[50px] absolute overflow-hidden bg-grey grayscale hover:grayscale-0 hover:opacity-100  hover:scale-105 transition-all duration-500">
        <img
          src="../../public/images/About.jpg"
          alt="About Me Image"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 "></div>
    </div>
  );
};

export default AboutMeImage;
