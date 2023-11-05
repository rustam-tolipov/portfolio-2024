import React, { useContext } from "react";
import Welcome from "../features/home/Welcome";
import { motion } from "framer-motion";
import Indicator from "../ui/Indicator";
import { ProjectContext } from "../context/ProjectContext";
import { FaMousePointer } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks";

const Home = () => {
  const { isCurrent } = useContext(ProjectContext);

  return (
    <div className="relative h-screen w-screen">
      <Welcome />

      {Array.from({ length: 13 }).map((_, index) => (
        <section
          key={index}
          className="flex h-screen w-full snap-start items-center justify-center"
        >
          {index}
        </section>
      ))}

      {isCurrent === "frames" && <Indicator type={isCurrent} />}
      {isCurrent === "contact" && <Indicator type={isCurrent} />}
      {isCurrent === "desktop" && <Indicator type={isCurrent} />}
      {isCurrent === "scroll" &&  <Indicator type={isCurrent} />}

      {isCurrent !== "welcome" && <SocialLinks />}
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll
