import { motion } from "framer-motion";

interface MenuAnimationProps {
  menuItems: string[];
  subItems: string[];
  images?: string[];
  className?: string;
  link?: string[];
}

const MenuAnimation: React.FC<MenuAnimationProps> = ({
  menuItems,
  subItems,
  images,
  className,
  link,
}) => {
  const svgWidth = window.innerWidth > 600 ? 400 : 300;

  return (
    <div
      className={`flex w-1/2 h-[400px] md:h-[400px] flex-col gap-4 md:gap-2 px-0 md:px-16 ml-4 md:ml-6 ${className}`}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="group flex relative">
          <div className="flex items-start flex-col gap-2">
            <motion.div
              initial={{ translateX: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
                damping: 10,
              }}
              whileHover={{ translateX: 22 }}
              className="z-10 cursor-pointer flex flex-col items-start gap-2"
            >
              <a
                href={link ? link[index] : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-5 items-center"
              >
                <h1 className="font-bold text-foreground group-hover:text-secondaryColor text-lg md:text-2xl lg:text-2xl sm:text-lg">
                  {item}
                </h1>
                <sub className="text-slate-500 font-medium group-hover:text-violet-950 text-xs md:text-xs lg:text-sm">
                  {subItems[index]}
                </sub>
              </a>
              <svg
                height="2"
                width={svgWidth}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  className="stroke-black"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
          </div>

          {images && images[index] && (
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: -10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
                delay: 0.7,
                repeatDelay: 0.7,
              }}
              src={images[index]}
              alt={item}
              className="h-40 w-32 cursor-pointer -right-44 -top-8 md:-right-96 md:-top-24 md:h-60 md:w-60 object-cover absolute opacity-0 group-hover:opacity-100 z-50 rounded-xl transition-all duration-500 pointer-events-none group-hover:pointer-events-auto"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuAnimation;
