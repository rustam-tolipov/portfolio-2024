import React, { createContext, useEffect, useState } from "react";
import { SPEED_FACTOR, isMobile, positions } from "../utils/constant";

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

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobile) {
      positions.forEach((position) => {
        if (scrollPosition > position.start && scrollPosition < position.end) {
          setIsCurrent(position.name);
        }
      });
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
