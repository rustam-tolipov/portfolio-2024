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
    <div className="relative h-[100dvh] w-[100dvw]">
      <Welcome />

      {Array.from({ length: isMobile ? 30 : 1 }).map((_, index) => (
        <section
          key={index}
          className="relative flex h-screen w-full snap-start items-center justify-center"
        >
          {!isMobile && (
            <>
              {!isHovered && <Indicator type={isCurrent} />}
              <SocialLinks />
              <Navigation />

              {isHovered && isCurrent === "projects" && (
                <ProjectInfo isHovered={isHovered} />
              )}
            </>
          )}
        </section>
      ))}

      {isMobile && scrollPosition > 5 && (
        <>
          <SocialLinks />
          <IndicatorMobile type={isCurrent} />
          {/* <Navigation /> */}
        </>
      )}
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll
