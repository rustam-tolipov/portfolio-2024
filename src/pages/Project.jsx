import React, { useEffect, useState } from "react";

import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";
import Reveal from "../ui/Reveal";

const Project = () => {
  const { link } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const project = projects.find((item) => item.link === link);
    setProject(project);

    window.scrollTo(0, 0);

    return () => {
      setProject(null);
    };
  }, [link]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const { title, links, stacks, images } = project;

  return (
    <div className="flex flex-col items-center">
      <div className="heading flex h-[60dvh] w-full items-center justify-center drop-shadow-xl">
        <h1 className="text-7xl font-bold tracking-wide">{title}</h1>

        {links.map((link) => (
          <a
            href={link.url}
            key={link.url}
            className="absolute bottom-4 right-4 rounded-lg border border-[#4242425c] bg-[#000000c3] px-4 py-1 text-xl shadow-xl transition-all duration-100"
          >
            {link.title}
          </a>
        ))}
      </div>

      <div className="container flex flex-col gap-12 p-4 py-16">
        <div className="flex items-end gap-4">
          <h2 className="text-2xl uppercase">Stacks:</h2>
          <ul className="flex flex-wrap gap-4 text-2xl font-thin">
            {stacks.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col items-center gap-28">
          {images.map((image, index) => (
            <Reveal key={index}>
              <img
                src={image.link.url}
                alt={image.link.url}
                key={index}
                className="w-full  rounded-xl"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
