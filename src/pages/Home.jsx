import React, { useContext } from "react";
import Welcome from "../features/home/Welcome";
import SocialLinks from "../ui/SocialLinks";
import Navigation from "../ui/Navigation";
import { ProjectContext } from "../context/ProjectContext";
import Indicator from "../ui/Indicator";
import { isMobile } from "../utils/constant";
import { motion } from "framer-motion";

const projects_list = [
  {
    title: "Personal Budget Planner",
    description: "Ruby on Rails, React JS, Chart JS, Redux",
    link: "personal-budget-planner-v2",
    id: "project2",
  },
  {
    title: "Rasmga OL",
    description:
      "Ruby on Rails, React JS, Tailwind CSS, React Query, Framer Motion",
    link: "rasmga_ol",
    id: "project1",
  },
  {
    title: "Handheld",
    description: "React Three Fiber",
    link: "handheld",
    id: "project6",
  },
  {
    title: "Best Dental Clinic",
    description: "React JS, Tailwind CSS, Context API, React Router",
    link: "best-dental-clinic",
    id: "project5",
  },
  {
    title: "Selmart",
    description: "React JS, Tailwind CSS, REST API",
    link: "selmart",
    id: "project4",
  },
  {
    title: "Premium Pencils",
    description: "React Three Fiber, Context API, React Spring, React Router",
    link: "selmart",
    id: "project3",
  },
];

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

      {isCurrent && !isHovered && !isMobile && <Indicator type={isCurrent} />}
      {isHovered &&
        isCurrent === "projects" &&
        scrollPosition > 5 &&
        !isMobile && <ProjectInfo isHovered={isHovered} />}

      {scrollPosition > 5 && (
        <>
          <SocialLinks />
          <Navigation />
          <div className="fixed bottom-4 z-20 hidden w-full items-center justify-center lg:flex">
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
        </>
      )}
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll

const ProjectInfo = ({ isHovered }) => {
  return (
    <div
      className="fixed bottom-4 right-4 z-20 flex max-w-[80dvw] items-center gap-2 rounded-lg border border-[#4242425c] bg-[#000000c3] p-4 shadow-xl transition-all duration-100 lg:min-w-[30dvw]"
      style={{ backdropFilter: "blur(50px)" }}
    >
      <div className="flex flex-col gap-4">
        {projects_list.map((project) => {
          if (project.id == isHovered) {
            return (
              <React.Fragment key={project.id}>
                <h2 className="text-lg font-bold drop-shadow-lg lg:text-3xl">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-100 drop-shadow-lg">
                  {project.description}
                </p>
              </React.Fragment>
            );
          }
        })}
      </div>
    </div>
  );
};
