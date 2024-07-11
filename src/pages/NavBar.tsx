import React, { useState, RefObject } from "react";
import { Menu, X } from "lucide-react";
import image1 from "../assets/img7.jpeg";
import { NavItems } from "../components/animata/list/NavItems";

interface NavBarProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToSection,
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsNavOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 shadow-2xl lg:h-16 lg:w-[80%] rounded-3xl left-[150px] backdrop-blur-sm mt-3 lg:mt-5">
      <div className="flex justify-between items-center px-4 lg:px-8">
        <img
          src={image1}
          alt="logo"
          className="lg:w-12 w-7 lg:h-12 h-7 rounded-full"
        />
        <div className="hidden lg:flex gap-4">
          <NavItems
            text="Home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <NavItems text="About Me" onClick={() => handleScroll(aboutRef)} />
          <NavItems text="Projects" onClick={() => handleScroll(projectsRef)} />
          <NavItems text="Contact" onClick={() => handleScroll(contactRef)} />
        </div>

        <div className="lg:hidden">
          <button onClick={handleToggleNav} aria-label="Toggle Navigation">
            {isNavOpen ? (
              <X className="text-white w-8 h-8" />
            ) : (
              <Menu className="text-white w-8 h-8" />
            )}
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="lg:hidden flex flex-col gap-2 py-2">
          <NavItems
            text="Home"
            onClick={() => handleScroll({ current: null })}
          />
          <NavItems text="About Me" onClick={() => handleScroll(aboutRef)} />
          <NavItems text="Projects" onClick={() => handleScroll(projectsRef)} />
          <NavItems text="Contact" onClick={() => handleScroll(contactRef)} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
