import React from "react";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogoThin } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { GITHUB, LINKEDIN, EMAIL, INSTAGRAM } from "../utils/constant";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed left-2 top-1/2 z-20 flex -translate-y-1/2 transform flex-col items-center gap-2 text-gray-50 lg:bottom-4 lg:left-4"
    >
      <SocialLink href={GITHUB}>
        <PiGithubLogoThin className="text-md lg:text-2xl" />
      </SocialLink>
      <SocialLink href={LINKEDIN}>
        <CiLinkedin className="text-md lg:text-2xl" />
      </SocialLink>
      <SocialLink href={EMAIL}>
        <SiGmail className="text-md lg:text-2xl" />
      </SocialLink>
      <SocialLink href={INSTAGRAM}>
        <CiInstagram className="text-md lg:text-2xl" />
      </SocialLink>
    </motion.div>
  );
};

export default SocialLinks;

const SocialLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 rounded-lg border border-[#ffffff45] bg-[#33323000] p-1 shadow-xl lg:gap-2 lg:p-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ backdropFilter: "blur(10px)" }}
    >
      {children}
    </motion.a>
  );
};
