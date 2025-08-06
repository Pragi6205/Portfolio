import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import Vector from "./assets/images/Vector577.png";
// import "./App.css";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <img src={Vector} alt="" className="absolute opacity-[6%] z-0 md:block hidden" />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <FooterMain />
    </main>
  );
}

export default App;
