import { motion } from "framer-motion";
import MenuAnimation from "../components/animata/list/menu-animation";
import DoubleUnderline from "../components/animata/text/double-underline";
import img1 from "../assets/img2.jpeg";
import img2 from "../assets/img3.jpeg";
import img3 from "../assets/img4.jpeg";
import img4 from "../assets/img5.jpeg";
import img5 from "../assets/img6.jpeg";
import img6 from "../assets/img7.jpeg";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-evenly items-center min-h-fit min-w-fit  px-[30px] rounded-3xl mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="h-24 w-48">
        <DoubleUnderline className="text-5xl text-foreground font-bold ">
          Projects
        </DoubleUnderline>
      </div>
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-4 md:gap-2 ml-0 md:ml-20 mt-10"
        variants={itemVariants}
      >
        <MenuAnimation
          menuItems={[
            "To do List",
            "Task Management",
            "E-commerce website",
            "Library Management system",
            "Futsa",
            "Charity app",
          ]}
          subItems={["2019", "2020", "2021", "2022", "2023", "2024"]}
          link={[
            "https://github.com/chirubhai/todo-list-app",
            "https://github.com/chirubhai/task-management-app",
            "https://github.com/chirubhai/ecommerce-website",
            "https://github.com/chirubhai/library-management-system",
            "https://github.com/chirubhai/futsa",
            "https://github.com/chirubhai/charity-app",
          ]}
          images={[img1, img2, img3, img4, img5, img6]} //upload images whats your site looks like
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
