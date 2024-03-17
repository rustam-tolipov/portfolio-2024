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
