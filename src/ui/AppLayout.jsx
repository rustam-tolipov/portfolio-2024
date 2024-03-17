import React, { useContext } from "react";
import { Outlet } from "react-router";
import Model from "../canvas/Model";
import { AnimatePresence } from "framer-motion";
import { ProjectContext } from "../context/ProjectContext";

const AppLayout = () => {
  const { isCanvasLoaded } = useContext(ProjectContext);

  return (
    <AnimatePresence mode="wait">
      <div className="relative scroll-smooth">
        {isCanvasLoaded && (
          <main className="absolute top-0">
            <Outlet />
          </main>
        )}

        <div className="fixed top-0 h-screen w-screen">
          <Model />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AppLayout;
