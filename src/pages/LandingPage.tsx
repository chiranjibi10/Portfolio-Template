import { useRef, RefObject } from "react";
import NavBar from "./NavBar";
import SocialMediaIconList from "../components/animata/list/social-media-list";
import HeroImg from "../assets/img7.jpeg";
import TextFlip from "../components/animata/text/text-flip";
import WaveReveal from "../components/animata/text/wave-reveal";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import ResumePDF from "../assets/resume-sample.pdf";
import ShiningButton from "../components/animata/button/shining-button";
import { Download } from "lucide-react";

const LandingPage = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef);
  const projectsInView = useInView(projectsRef);
  const contactInView = useInView(contactRef);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    scrollToSection(contactRef);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.setAttribute("download", "resume-sample.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen min-w-full ">
      <NavBar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="flex flex-col md:flex-row items-center sm:p-10 justify-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2 font-extrabold text-2xl md:text-4xl font-mono p-16 md:mt-16">
          <h1 className="text-secondaryColor">
            Hey There{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              👋
            </motion.span>
          </h1>
          <WaveReveal
            text="It's me Chiranjibi"
            className="text-foreground"
            letterClassName="text-3xl md:text-5xl "
          />
          <TextFlip />
          <SocialMediaIconList size={30} className="mt-7" />

          <div className="lg:text-xl md:text-lg text-normal">
            <ShiningButton
              icon={<Download size={24} className="text-white" />}
              label="Download my Resume"
              onClick={handleDownloadResume}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mt-16 p-10">
          <img
            src={HeroImg}
            alt="hero-img"
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 100 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        id="about"
      >
        <AboutMe scrollToContact={scrollToContact} />
      </motion.div>

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        id="projects"
      >
        <Projects />
      </motion.div>

      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 100 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        id="contact"
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default LandingPage;
