import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Luxera",
    year: "Nov 2024",
    align: "right",
    image: "../../public/images/Landing page.png",
    link: "https://luxera.netlify.app/",
  },
  {
    name: "CalmCampus",
    year: "Jan 2024",
    align: "left",
    image: "../../public/images/Group 1597882917.png",
    link: "#",
  },
  {
    name: "Wildlens",
    year: "Oct 2024",
    align: "right",
    image: "../../public/images/Desktop - 4.png",
    link: "https://wildlens-tours-client.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
