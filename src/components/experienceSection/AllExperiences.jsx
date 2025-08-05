import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "UX Researcher",
    company: "Jarurat Care",
    date: "Nov - Dec 2024",
    responsibilities: [
      "Conducted user research and interviews to understand needs of patients and caregivers.",
      "Performed heuristic evaluations and usability testing to identify interface pain points.",
      "Analyzed competing healthcare platforms to guide feature improvements and navigation.",
      "Created wireframes and user flows to support redesign of key user journeys.",
    ],
  },
  {
    job: "UI UX Designer",
    company: "CalmCampus",
    date: "Jan - Feb 2025",
    responsibilities: [
      "Designed high-fidelity UI screens in Figma with a focus on mental wellness and clarity.",
      "Ensured design consistency, accessibility, and responsiveness across multiple devices.",
      "Developed interactive prototypes to showcase user experience flows and transitions.",
      "Collaborated with developers to implement the design system and maintain visual fidelity.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >

              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
