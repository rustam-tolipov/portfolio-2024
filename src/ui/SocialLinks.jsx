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
      className="fixed bottom-4 left-4 z-20 flex flex-col items-center gap-2"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <SocialLink href={GITHUB}>
        <PiGithubLogoThin className="text-2xl" />
      </SocialLink>
      <SocialLink href={LINKEDIN}>
        <CiLinkedin className="text-2xl" />
      </SocialLink>
      <SocialLink href={EMAIL}>
        <SiGmail className="text-2xl" />
      </SocialLink>
      <SocialLink href={INSTAGRAM}>
        <CiInstagram className="text-2xl" />
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
      className="flex items-center gap-2 rounded-lg border border-[#ffffff45] bg-[#33323000] p-2 shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};
