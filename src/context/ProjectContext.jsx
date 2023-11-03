import React, { createContext, useEffect, useState } from "react";
import { SPEED_FACTOR } from "../utils/constant";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCurrent, setIsCurrent] = useState("welcome");

  const handleScroll = () => {
    const speedFactor = SPEED_FACTOR;
    setScrollPosition(window.scrollY * speedFactor);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition < 9.3) {
      setIsCurrent("scroll");
    } else if (scrollPosition < 12.4) {
      setIsCurrent("desktop");
    } else if (scrollPosition > 21.8 && scrollPosition < 30) {
      setIsCurrent("frames");
    } else if (scrollPosition < 30) {
      setIsCurrent("laptop");
    } else if (scrollPosition < 41) {
      setIsCurrent("experience");
    } else if (scrollPosition > 83 && scrollPosition < 90) {
      setIsCurrent("contact");
    } else if (scrollPosition > 90) {
      setIsCurrent("end");
    } else {
      setIsCurrent("scroll");
    }
  }, [scrollPosition]);

  console.log(scrollPosition, isCurrent);

  return (
    <ProjectContext.Provider
      value={{
        scrollPosition,
        setScrollPosition,
        mousePosition,
        setMousePosition,
        isCurrent,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
