import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="md:text-6xl text-grey mb-10 uppercase font-bold transition-all duration-500 hover:text-[#377781] text-3xl sm:text-[#398793]">About Me</h2>
      <p className="text-justify text-[15px] px-4 md:p-0">
        I’m Praghadeesh, a UI/UX designer with a flair for building intuitive, user-centered digital interfaces. With a strong background in front-end technologies like HTML and CSS, I bring a blend of aesthetics and functionality to every project. <br /><br />

      <span className="text-[17px] md:text-[20px] text-grey font-bold">Email ID: </span> <a href="praghadeesh6205@gmail.com">praghadeesh6205@gmail.com</a><br />
      <span className="text-[17px] md:text-[20px] text-grey font-bold">Phone: </span> <a href="6369933795">6369933795</a>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-[#377781] transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
