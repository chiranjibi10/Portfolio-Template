import { Map, Mail, PhoneCall, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";
import ShiningButton from "../components/animata/button/shining-button";

const Contact = () => {
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

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center px-6 py-6  rounded-2xl md:w-fit w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-10 md:w-1/3 w-full md:px-10"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-col gap-6  text-foreground md:text-lg text-base">
          <motion.div
            className="flex flex-col items-center gap-2 justify-center"
            variants={itemVariants}
          >
            <span className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
              <Map size={24} className="text-white" />
            </span>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-lg font-bold md:text-2xl ">Address:</h1>
              <div className="flex flex-col gap-1">
                <p>Lakeside,Pokhara</p>
                <p>NewYork,USA</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2 justify-center"
            variants={itemVariants}
          >
            <span className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
              <Mail size={24} className="text-white" />
            </span>
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="text-lg font-bold md:text-2xl ">Email:</p>
              <div className="flex flex-col gap-2">
                <p>ranachiranjibi@gmail.com</p>
                <p>tonysinghdrs@gmail.com</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2 justify-center"
            variants={itemVariants}
          >
            <span className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
              <PhoneCall size={24} className="text-white" />
            </span>
            <div className="flex flex-col items-center justify-center text-center ">
              <h1 className="text-lg font-bold md:text-2xl">Phone:</h1>
              <div className="flex flex-col gap-2">
                <p>+9779826163333</p>
                <p>+9779846645345</p>
              </div>
            </div>
          </motion.div>
        </div>
        <svg
          height="300"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block"
        >
          <line
            x1="5"
            y1="0"
            x2="5"
            y2="300"
            className="stroke-current text-foreground"
            strokeWidth="6"
          />
        </svg>
      </motion.div>
      <motion.div
        className="flex flex-col justify-start md:w-1/2 w-full p-6 mt-6 md:mt-0 "
        variants={itemVariants}
      >
        <h1 className="font-bold text-3xl text-foreground mb-4 text-center md:text-start tracking-wide">
          Contact Me
        </h1>
        <p className="text-foreground/60 text-sm md:text-lg  font-mono mb-6">
          If you have any work for me or any types of queries related to my
          work, you can send me a message from here. It's my pleasure to help
          you.
        </p>
        <form className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border-2  rounded-md focus:outline-none border-white focus:ring-2 focus:ring-buttonColor placeholder:text-slate-400 text-normal md:text-lg"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-3 border-2  rounded-md focus:outline-none border-white focus:ring-2 focus:ring-buttonColor placeholder:text-slate-400 text-normal md:text-lg"
          />
          <textarea
            placeholder="Write a message here"
            className="p-3 border-2  rounded-md focus:outline-none border-white focus:ring-2 focus:ring-buttonColor spell-check:true placeholder:text-slate-400 text-normal md:text-lg"
            rows={2}
          />
          <div className="flex md:justify-start justify-center items-center ">
            <ShiningButton
              label="Send message"
              icon={<SendHorizonal size={24} className="text-white " />}
              onClick={() => {}}
            />
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
