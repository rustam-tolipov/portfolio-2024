import React, { createContext, useEffect, useState } from "react";
import { SPEED_FACTOR, isMobile } from "../utils/constant";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCurrent, setIsCurrent] = useState("welcome");
  const [isHovered, setIsHovered] = useState(false);

  const onHover = (projectName) => {
    if (!isHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
    setIsHovered(projectName);
  };

  useEffect(() => {
    if (isHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [isHovered]);

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.scrollY * SPEED_FACTOR);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollPositions = {
      desktop: 10,
      projects: 23,
      welcome: isMobile ? 0 : 6,
      tv: 50,
      experience: 63,
    };

    if (Object.prototype.hasOwnProperty.call(scrollPositions, isCurrent)) {
      setScrollPosition(scrollPositions[isCurrent]);
    }
  }, [isCurrent]);

  useEffect(() => {
    if (isMobile) {
      if (scrollPosition > 23 && scrollPosition < 28) {
        setIsCurrent("projects");
      } else if (scrollPosition > 10 && scrollPosition < 14) {
        setIsCurrent("desktop");
      } else if (scrollPosition > 50 && scrollPosition < 54) {
        setIsCurrent("tv");
      } else if (scrollPosition > 63 && scrollPosition < 84) {
        setIsCurrent("experience");
      } else if (scrollPosition < 6) {
        setIsCurrent("welcome");
      }
    }
  }, [scrollPosition]);

  return (
    <ProjectContext.Provider
      value={{
        scrollPosition,
        setScrollPosition,
        isCurrent,
        setIsCurrent,
        isHovered,
        onHover,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
