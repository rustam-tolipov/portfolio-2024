import React, { useContext } from "react";
import Welcome from "../features/home/Welcome";
import Indicator from "../ui/Indicator";
import { ProjectContext } from "../context/ProjectContext";
import SocialLinks from "../ui/SocialLinks";

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
  const { isCurrent, isHovered } = useContext(ProjectContext);

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

      {isCurrent === "frames" && !isHovered && <Indicator type={isCurrent} />}
      {isCurrent === "contact" && <Indicator type={isCurrent} />}
      {isCurrent === "desktop" && <Indicator type={isCurrent} />}
      {isCurrent === "scroll" && <Indicator type={isCurrent} />}
      {isHovered && isCurrent !== "welcome" && isCurrent === "frames" && (
        <ProjectInfo isHovered={isHovered} />
      )}

      {isCurrent !== "welcome" && <SocialLinks />}
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll

const ProjectInfo = ({ isHovered }) => {
  return (
    <div
      className="fixed bottom-4 right-4 z-20 flex min-w-[30dvw] items-center gap-2 rounded-lg border border-[#4242425c] bg-[#000000c3] p-4 shadow-xl transition-all duration-100"
      style={{ backdropFilter: "blur(50px)" }}
    >
      <div className="flex flex-col gap-4">
        {projects_list.map((project) => {
          if (project.id == isHovered) {
            return (
              <React.Fragment key={project.id}>
                <h2 className="text-3xl font-bold drop-shadow-lg">
                  {project.title}
                </h2>
                <p className="text-gray-100 drop-shadow-lg">
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
