import { useState } from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/img4.jpeg";
import img1 from "../assets/img6.jpeg";
import img2 from "../assets/img7.jpeg";
import DoubleUnderline from "../components/animata/text/double-underline";
import ShiningButton from "../components/animata/button/shining-button";
import { PhoneCall } from "lucide-react";

interface AboutMeProps {
  scrollToContact: () => void;
}
const AboutMe = ({ scrollToContact: scrollToContact }: AboutMeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [-10, 0, -10],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.1, 1.1, 1],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
      rotate: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
      scale: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:gap-10 md:flex-row justify-center items-center min-h-screen min-w-fit p-5 md:p-10 mx-5 md:mx-10 rounded-3xl mt-0  md:mt-16 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-full md:w-1/2  flex flex-col justify-center items-center"
        variants={itemVariants}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="relative w-[80%] h-96 sm:w-[60%] md:w-[80%]"
        >
          <motion.img
            initial={{ y: 0 }}
            animate={floatingAnimation}
            src={isHovered ? img2 : img1}
            alt="about-img"
            className="size-32 md:size-48 -top-[15%] absolute -right-[15%]  rounded-2xl"
          />

          <motion.img
            initial={{ y: 0 }}
            animate={floatingAnimation}
            src={isHovered ? img1 : img2}
            alt="about-img"
            className=" size-32 md:size-48 -bottom-[15%] absolute -left-[15%]  rounded-2xl"
          />
          <img
            src={AboutImg}
            alt="about-img"
            className="w-full h-full  rounded-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToContact}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center md:items-center justify-center gap-4 w-full md:w-1/2 font-extrabold font-mono text-center md:text-left"
        variants={itemVariants}
      >
        <DoubleUnderline className="text-bold p-6 mt-8 lg:text-5xl text-4xl text-foreground  ">
          About Me
        </DoubleUnderline>

        <h1 className="text-foreground text-sm md:text-base lg:text-lg text-left font-serif tracking-wide md:text-center">
          You are a <strong>passionate</strong> software engineer who thrives in
          the world of code. With a keen eye for detail and a relentless
          curiosity, you continually seek out new knowledge and stay on the
          cutting edge of technology. Your expertise in React and TypeScript,
          coupled with your skills in mobile app development, allows you to
          create seamless and dynamic user experiences.
        </h1>
        <ShiningButton
          label="Contact Me"
          icon={<PhoneCall size={24} className="text-white" />}
          onClick={scrollToContact}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
