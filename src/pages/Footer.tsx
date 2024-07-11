import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <h1 className="font-bold text-xl text-foreground ">
        Made with{" "}
        <motion.span
          animate={{ scale: [1, 1.4, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 0.6,
          }}
          className="inline-block"
        >
          ❤️
        </motion.span>{" "}
        by{" "}
        <a
          href="https://github.com/(Your Github Username)"
          target="_blank"
          rel="noreferrer"
          className="ml-1 underline text-secondaryColor"
        >
          Your Name Here
        </a>
      </h1>
    </div>
  );
};

export default Footer;
