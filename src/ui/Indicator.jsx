import { motion } from "framer-motion";
import { FaMousePointer } from "react-icons/fa";
import { SlMouse } from "react-icons/sl";

const Indicator = ({ type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-0 z-20 flex w-full items-center justify-center gap-2 rounded-lg border border-[#ffffff45] bg-[#333230] px-4 py-2 text-xs shadow-xl md:bottom-4 md:right-4 md:w-fit md:text-lg"
      style={{ backdropFilter: "blur(10px)" }}
    >
      {type === "welcome" && <Select />}
      {type === "projects" && <Frames />}
      {type === "contact" && <Contact />}
      {type === "desktop" && <Desktop />}
      {type === "tv" && <Desktop />}
      {type === "scroll" && <Scroll />}
    </motion.div>
  );
};

export default Indicator;

const Frames = () => {
  return (
    <>
      <motion.p
        animate={{
          y: [0, 1, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex animate-pulse items-center gap-2"
      >
        <FaMousePointer className="text-xs lg:text-lg" />
      </motion.p>
      Mouse over the projects and click to learn more
    </>
  );
};

const Contact = () => {
  return (
    <>
      <motion.p
        animate={{
          y: [0, 1, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex animate-pulse items-center gap-2"
      >
        <FaMousePointer className="text-xs lg:text-lg" />
      </motion.p>
      Mouse over the links and click to connect
    </>
  );
};

const Desktop = () => {
  return (
    <>
      <motion.p
        animate={{
          y: [0, 1, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex animate-pulse items-center gap-2"
      >
        <FaMousePointer className="text-xs lg:text-lg" />
      </motion.p>
      Click to explore
    </>
  );
};

const Scroll = () => {
  return (
    <>
      <motion.p
        animate={{
          y: [0, 1, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex animate-pulse items-center gap-2"
      >
        <SlMouse className="text-lg" />
      </motion.p>
      Scroll to explore
    </>
  );
};

const Select = () => {
  return <>To explore, please select a section from the navigation</>;
};
