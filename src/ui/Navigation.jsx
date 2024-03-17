/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../context/ProjectContext";

const Navigation = () => {
  const { setIsCurrent } = useContext(ProjectContext);

  return (
    <div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed bottom-4 right-4 z-20 flex flex-col items-center gap-2"
    >
      <NavButton onClick={() => setIsCurrent("welcome")}>Welcome</NavButton>
      <NavButton onClick={() => setIsCurrent("desktop")}>Desktop</NavButton>
      <NavButton onClick={() => setIsCurrent("projects")}>Projects</NavButton>
      <NavButton onClick={() => setIsCurrent("experience")}>
        Experience
      </NavButton>
      <NavButton onClick={() => setIsCurrent("contact")}>Contact</NavButton>
    </div>
  );
};

export default Navigation;

const NavButton = ({ children, onClick }) => {
  return (
    <motion.button
      className="flex w-[10rem] items-center justify-center gap-2 rounded-lg border border-[#ffffff45] bg-[#33323000] px-6 py-2 shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ backdropFilter: "blur(10px)" }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
