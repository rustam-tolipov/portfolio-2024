import React from "react";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogoThin } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import {
  GITHUB,
  LINKEDIN,
  EMAIL,
  INSTAGRAM,
  isMobile,
} from "../utils/constant";

const SocialLinks = () => {
  return (
    <div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -100 }}
      className={`left-2 top-1/2 z-20 flex flex-col items-center gap-2 text-gray-50 lg:bottom-4 lg:left-4 ${
        isMobile ? "fixed" : "absolute"
      }`}
    >
      <SocialLink href={GITHUB}>
        <PiGithubLogoThin className="text-xl lg:text-2xl" />
      </SocialLink>
      <SocialLink href={LINKEDIN}>
        <CiLinkedin className="text-xl lg:text-2xl" />
      </SocialLink>
      <SocialLink href={EMAIL}>
        <SiGmail className="text-xl lg:text-2xl" />
      </SocialLink>
      <SocialLink href={INSTAGRAM}>
        <CiInstagram className="text-xl lg:text-2xl" />
      </SocialLink>
    </div>
  );
};

export default SocialLinks;

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 rounded-lg border border-[#ffffff45] bg-[#333230] p-1 shadow-xl lg:gap-2 lg:p-2"
    >
      {children}
    </a>
  );
};
