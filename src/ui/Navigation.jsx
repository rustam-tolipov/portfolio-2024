import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../context/ProjectContext";
import {
  CiDesktop,
  CiGrid42,
  CiHome,
  CiYoutube,
  CiMemoPad,
} from "react-icons/ci";
import {
  WELCOME_SECTION,
  DESKTOP_SECTION,
  PROJECTS_SECTION,
  TV_SECTION,
  EXPERIENCE_SECTION,
  isMobile,
} from "../utils/constant";

const navigations = [
  {
    name: WELCOME_SECTION,
    icon: <CiHome className="text-xl text-gray-50 lg:text-2xl" />,
  },
  {
    name: DESKTOP_SECTION,
    icon: <CiDesktop className="text-xl text-gray-50 lg:text-2xl" />,
  },
  {
    name: PROJECTS_SECTION,
    icon: <CiGrid42 className="text-xl text-gray-50 lg:text-2xl" />,
  },
  {
    name: TV_SECTION,
    icon: <CiYoutube className="text-xl text-gray-50 lg:text-2xl" />,
  },
  {
    name: EXPERIENCE_SECTION,
    icon: <CiMemoPad className="text-xl text-gray-50 lg:text-2xl" />,
  },
];

const Navigation = () => {
  const { isCurrent, setIsCurrent } = useContext(ProjectContext);

  return (
    <div
      className={`right-4 top-0 z-20 flex h-[100dvh] flex-col justify-end gap-2 pb-24 lg:right-20 lg:justify-center lg:gap-8 ${isMobile ? "fixed" : "absolute"}`}
    >
      {navigations.map((navigation) => (
        <NavButton
          key={navigation.name}
          onClick={() => {
            setIsCurrent(navigation.name);
          }}
          isActive={isCurrent === navigation.name}
        >
          {navigation.icon}
        </NavButton>
      ))}
    </div>
  );
};

export default Navigation;

const NavButton = ({ children, onClick, isActive }) => {
  return (
    <motion.button
      className="flex h-10 w-10 items-center justify-center gap-2 rounded-lg border border-[#ffffff45] bg-[#33323000] shadow-xl lg:h-12 lg:w-12"
      style={{
        boxShadow: isActive ? "0 0 0 2px #ffffff" : "none",
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
