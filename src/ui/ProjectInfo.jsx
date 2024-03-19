import React from "react";

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

export default ProjectInfo;
