/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../context/ProjectContext";
import { CiDesktop, CiGrid42, CiHome, CiYoutube } from "react-icons/ci";

const Navigation = () => {
  const { isCurrent, setIsCurrent } = useContext(ProjectContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed right-20 top-0 z-20 flex h-screen flex-col justify-center gap-8"
    >
      <NavButton onClick={() => setIsCurrent("welcome")}>
        <CiHome className="text-2xl text-gray-50" />
      </NavButton>
      <NavButton onClick={() => setIsCurrent("desktop")}>
        <CiDesktop className="text-2xl text-gray-50" />
      </NavButton>
      <NavButton onClick={() => setIsCurrent("projects")}>
        <CiGrid42 className="text-2xl text-gray-50" />
      </NavButton>
      <NavButton onClick={() => setIsCurrent("tv")}>
        <CiYoutube className="text-2xl text-gray-50" />
      </NavButton>
    </motion.div>
  );
};

export default Navigation;

const NavButton = ({ children, onClick }) => {
  return (
    <motion.button
      className="flex h-12 w-12 items-center justify-center gap-2 rounded-lg border border-[#ffffff45] bg-[#33323000] shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ backdropFilter: "blur(10px)" }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
