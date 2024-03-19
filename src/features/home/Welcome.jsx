import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../../context/ProjectContext";
import { ZERO, BLUR, END_OF_LANDING, isMobile } from "../../utils/constant";
import { CiCircleChevDown } from "react-icons/ci";

const Welcome = () => {
  const { scrollPosition } = useContext(ProjectContext);

  const [mousePosition, setMousePosition] = useState({ x: ZERO, y: ZERO });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      transition: {
        duration: 0,
      },
    },

    v2: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      scale: 0.5,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div
      className="z-10 flex h-screen w-full flex-col items-center justify-center gap-1 overflow-hidden sm:gap-4"
      onClick={() => {
        window.scrollTo({ top: 1100, behavior: "smooth" });
      }}
    >
      <div
        className="absolute left-0 top-0 z-20 h-screen w-screen transition-all duration-100 ease-linear"
        style={{
          backdropFilter: `blur(${scrollPosition < END_OF_LANDING ? BLUR : ZERO}px)`,
          WebkitBackdropFilter: `blur(${scrollPosition < END_OF_LANDING ? BLUR : ZERO}px)`,
          maskImage: `radial-gradient(150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 100%, black 100%)`,
          WebkitMaskImage: `radial-gradient(150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 100%, black 100%)`,
        }}
      ></div>

      {!isMobile && mousePosition.x > ZERO && (
        <motion.div
          className="absolute left-0 top-0 z-20 h-[300px] w-[300px] rounded-full border-4 border-gray-50 transition-all duration-100 ease-linear"
          variants={variants}
          animate="default"
        ></motion.div>
      )}

      <h1 className="z-20 text-2xl font-extrabold text-gray-50 md:text-5xl lg:text-7xl">
        Hi, I&apos;m Rustam Tolipov
      </h1>
      <h2 className="z-20 text-lg font-thin text-gray-50 sm:text-4xl">&</h2>
      <h2 className="z-20 rounded-lg text-lg font-light text-gray-50 md:text-3xl lg:text-4xl">
        Welcome to my portfolio
      </h2>

      <motion.div
        className="absolute bottom-10 z-20 lg:bottom-4"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <CiCircleChevDown className="text-4xl lg:text-7xl" />
      </motion.div>
    </div>
  );
};

export default Welcome;
