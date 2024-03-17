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
    if (isCurrent === "desktop") {
      setScrollPosition(9);
    } else if (isCurrent === "projects") {
      setScrollPosition(21);
    } else if (isCurrent === "welcome") {
      setScrollPosition(isMobile ? 0 : 6);
    } else if (isCurrent === "tv") {
      setScrollPosition(44);
    } else if (isCurrent === "experience") {
      setScrollPosition(55);
    }
  }, [isCurrent]);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    if (scrollPosition > 20 && scrollPosition < 23) {
      setIsCurrent("projects");
    } else if (scrollPosition > 8 && scrollPosition < 9) {
      setIsCurrent("desktop");
    } else if (scrollPosition > 24 && scrollPosition < 44) {
      setIsCurrent("tv");
    } else if (scrollPosition > 54 && scrollPosition < 55) {
      setIsCurrent("experience");
    } else if (scrollPosition < 6) {
      setIsCurrent("welcome");
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
