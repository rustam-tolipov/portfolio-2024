import React, { useContext } from "react";
import Welcome from "../features/home/Welcome";
import SocialLinks from "../ui/SocialLinks";
import Navigation from "../ui/Navigation";
import { ProjectContext } from "../context/ProjectContext";
import Indicator from "../ui/Indicator";
import { isMobile } from "../utils/constant";
import IndicatorMobile from "../ui/IndicatorMobile";
import ProjectInfo from "../ui/ProjectInfo";

const Home = () => {
  const { isCurrent, isHovered, scrollPosition } = useContext(ProjectContext);

  return (
    <div className="relative h-screen w-screen">
      <Welcome />

      {Array.from({ length: isMobile ? 13 : 1 }).map((_, index) => (
        <section
          key={index}
          className="flex h-screen w-full snap-start items-center justify-center"
        ></section>
      ))}

      {isCurrent && !isHovered && !isMobile && scrollPosition > 5 && (
        <Indicator type={isCurrent} />
      )}
      {isHovered &&
        isCurrent === "projects" &&
        scrollPosition > 5 &&
        !isMobile && <ProjectInfo isHovered={isHovered} />}

      {scrollPosition > 5 && (
        <>
          <SocialLinks />
          <Navigation />
          <IndicatorMobile isCurrent={isCurrent} />
        </>
      )}
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll
