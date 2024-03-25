import { FaMousePointer } from "react-icons/fa";
import {
  DESKTOP_SECTION,
  EXPERIENCE_SECTION,
  PROJECTS_SECTION,
  SCROLLABLE_SECTION,
  TV_SECTION,
  WELCOME_SECTION,
} from "../utils/constant";

const sections = [
  {
    name: WELCOME_SECTION,
    icon: <FaMousePointer />,
    text: "To explore, please select a section from the navigation",
  },
  {
    name: PROJECTS_SECTION,
    icon: <FaMousePointer />,
    text: "Mouse over the projects and click to learn more",
  },
  {
    name: EXPERIENCE_SECTION,
    icon: <FaMousePointer />,
    text: "Hold and drag to explore",
  },
  { name: DESKTOP_SECTION, icon: <FaMousePointer />, text: "Click to explore" },
  { name: TV_SECTION, icon: <FaMousePointer />, text: "Click to explore" },
  {
    name: SCROLLABLE_SECTION,
    icon: <FaMousePointer />,
    text: "Scroll to explore",
  },
];

const Indicator = ({ type }) => {
  console.log(type);

  return (
    <div
      className="absolute bottom-0 z-20 flex w-full items-center justify-center gap-2 rounded-lg border border-[#ffffff45] bg-[#333230] px-4 py-2 text-xs text-gray-50 shadow-xl md:bottom-4 md:right-4 md:w-fit md:text-lg"
      style={{ backdropFilter: "blur(10px)" }}
    >
      {sections.map((section) => {
        if (section.name === type) {
          return (
            <div className="flex items-center gap-2" key={section.name}>
              <span className="animate-pulse">{section.icon}</span>
              {section.text}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Indicator;
