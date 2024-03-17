import React, { createContext, useEffect, useState } from "react";
import { SPEED_FACTOR } from "../utils/constant";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCurrent, setIsCurrent] = useState("welcome");
  const [isHovered, setIsHovered] = useState(false);
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false);

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

  return (
    <ProjectContext.Provider
      value={{
        scrollPosition,
        setScrollPosition,
        mousePosition,
        setMousePosition,
        isCurrent,
        setIsCurrent,
        isHovered,
        onHover,
        isCanvasLoaded,
        setIsCanvasLoaded,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
