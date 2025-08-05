import { Link } from "react-scroll";
import { useState } from "react";
import { div } from "framer-motion/client";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
];

const NavbarLinks = () => {
   const [click, setClick] = useState(false);

  return (
    <div className="">
 <ul className="flex lg:flex-row sm:flex-col lg:gap-40 gap-6 sm:bg-black  lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:w-full py-6 px-6 ">

      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className={`cursor-pointer text-white hover:text-[#377781] backdrop-blur-lg transition-all duration-500 ${click?"hidden lg:block":" "}`}
              onClick={()=>setClick(true)} >
              {link.link}
            </Link>
            <div className="mx-auto bg-grey w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
      </ul>
      </div>
  );
};

export default NavbarLinks;
