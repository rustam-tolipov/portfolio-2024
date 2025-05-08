import React from "react";
import { CiLinkedin, CiMail, CiTwitter } from "react-icons/ci";
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

const links = [
  {
    href: GITHUB,
    icon: <PiGithubLogoThin className="text-xl lg:text-2xl" />,
  },
  {
    href: LINKEDIN,
    icon: <CiLinkedin className="text-xl lg:text-2xl" />,
  },
  {
    href: EMAIL,
    icon: <CiMail className="text-xl lg:text-2xl" />,
  },
  {
    href: INSTAGRAM,
    icon: <CiTwitter className="text-xl lg:text-2xl" />,
  },
];

const SocialLinks = () => {
  return (
    <div
      className={`left-2 top-1/2 z-20 flex flex-col items-center gap-2 text-gray-50 lg:bottom-4 lg:left-4 ${
        isMobile ? "fixed" : "absolute"
      }`}
    >
      {links.map((link) => (
        <SocialLink key={link.href} href={link.href}>
          {link.icon}
        </SocialLink>
      ))}
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
