import React, { createContext, useEffect, useState } from "react";
import { SPEED_FACTOR } from "../utils/constant";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <ProjectContext.Provider
      value={{
        scrollPosition,
        setScrollPosition,
        mousePosition,
        setMousePosition,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
