import React, { useEffect, useState } from "react";

import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";
import Reveal from "../ui/Reveal";

import { CiLinkedin, CiMail, CiTwitter } from "react-icons/ci";
import { PiGithubLogoThin } from "react-icons/pi";

import { GITHUB, LINKEDIN, EMAIL, INSTAGRAM } from "../utils/constant";

const Project = () => {
  const { link } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const project = projects.find((item) => item.link === link);
    setProject(project);

    return () => {
      setProject(null);
    };
  }, [link]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const { title, links, stacks, images } = project;

  return (
    <div className="flex flex-col items-center text-gray-50">
      <div className="heading flex h-[50dvh] w-full items-center justify-center drop-shadow-xl lg:h-[60dvh]">
        <h1 className="text-xl font-bold tracking-wide md:text-4xl lg:text-7xl">
          {title}
        </h1>

        <div className="absolute bottom-4 right-4 flex gap-4">
          {links.map((link) => (
            <a
              href={link.url}
              key={link.url}
              className="text-md rounded-lg border border-[#4242425c] bg-[#000000c3] px-4 py-1 shadow-xl transition-all duration-100 lg:text-xl"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="container flex flex-col gap-12 p-4 py-16">
        <div className="flex gap-4 lg:items-end">
          <h2 className="text-lg uppercase lg:text-2xl">Stacks:</h2>
          <ul className="text-md flex flex-wrap gap-4 font-thin lg:text-2xl">
            {stacks.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-12 lg:mt-20 lg:gap-28">
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

        <footer className="flex flex-col items-center justify-end gap-6 lg:h-[30dvh] lg:gap-12">
          <h2 className="text-lg uppercase lg:text-2xl">Connect with me</h2>
          <div className="flex gap-5 lg:gap-10">
            <SocialLink href={GITHUB}>
              <PiGithubLogoThin className="text-2xl lg:text-4xl" />
            </SocialLink>
            <SocialLink href={LINKEDIN}>
              <CiLinkedin className="text-2xl lg:text-4xl" />
            </SocialLink>
            <SocialLink href={EMAIL}>
              <CiMail className="text-2xl lg:text-4xl" />
            </SocialLink>
            <SocialLink href={INSTAGRAM}>
              <CiTwitter className="text-2xl lg:text-4xl" />
            </SocialLink>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Project;

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-lg border border-[#ffffff45] bg-[#33323000] p-2 shadow-xl"
    >
      {children}
    </a>
  );
};
