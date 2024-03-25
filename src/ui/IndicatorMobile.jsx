import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { positions } from "../utils/constant";

const IndicatorMobile = () => {
  const { scrollPosition } = useContext(ProjectContext);

  const isProjects =
    positions[1].start < scrollPosition && scrollPosition < positions[1].end;

  return (
    <div className="fixed bottom-4 z-20 flex w-full items-center justify-center lg:hidden">
      <div
        className="w-fit items-center justify-center gap-2 rounded-lg border border-[#ffffff45] px-4 py-2 text-xs text-gray-50 shadow-xl "
        style={{ backdropFilter: "blur(10px)" }}
      >
        {isProjects
          ? " Mouse over the projects and click to learn more"
          : "Scroll down to see more"}
      </div>
    </div>
  );
};

export default IndicatorMobile;
