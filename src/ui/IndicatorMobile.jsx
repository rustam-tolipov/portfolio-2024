import React from "react";
import { motion } from "framer-motion";

const IndicatorMobile = ({ isCurrent }) => {
  return (
    <div className="fixed bottom-4 z-20 flex w-full items-center justify-center lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 100 }}
        className="w-fit items-center justify-center gap-2 rounded-lg border border-[#ffffff45] px-4 py-2 text-xs shadow-xl "
        style={{ backdropFilter: "blur(10px)" }}
      >
        {isCurrent === "projects"
          ? "Mouse over the projects and click to learn more"
          : "Scroll down to see more"}
      </motion.div>
    </div>
  );
};

export default IndicatorMobile;
