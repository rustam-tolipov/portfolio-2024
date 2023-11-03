import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlMouse } from "react-icons/sl";

const Welcome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrollPosition(window.scrollY);
      });
    };
  }, []);

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
    <div className="z-10 flex h-screen w-full snap-start flex-col items-center justify-center gap-1 sm:gap-4">
      <div
        className="absolute left-0 top-0 z-0 h-screen w-screen"
        style={{
          backdropFilter: `blur(${scrollPosition < 2 ? 40 : 0}px)`,
          WebkitBackdropFilter: `blur(${scrollPosition < 2 ? 40 : 0}px)`,
          maskImage: `radial-gradient(150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 100%, black 100%)`,
          WebkitMaskImage: `radial-gradient(150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 100%, black 100%)`,
        }}
      ></div>

      {mousePosition.x > 0 && (
        <motion.div
          className="absolute left-0 top-0 z-0 h-[300px] w-[300px] rounded-full border-4 border-gray-50"
          variants={variants}
          animate="default"
        ></motion.div>
      )}

      <h1 className="z-20 text-2xl font-extrabold text-gray-50 sm:text-7xl">
        Hi, I&apos;m Rustam Tolipov
      </h1>
      <h2 className="z-20 text-lg font-thin text-gray-50 sm:text-4xl">&</h2>
      <h2 className="z-20 bg-gray-100 px-2 py-1 text-lg font-light italic text-gray-900 sm:text-4xl">
        Welcome to my portfolio
      </h2>

      <motion.div
        className="absolute bottom-0 z-20"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <SlMouse className="text-7xl" />
      </motion.div>
    </div>
  );
};

export default Welcome;
