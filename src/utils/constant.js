const ZERO = 0;
const BLUR = 40;
const END_OF_LANDING = 10;

const SPEED_FACTOR = 0.005;
const DAMPING_FACTOR = 0.05;
const SCROLL_SPEED = 0.01;
const FREQUENCY = 60;
const CLOCK_SPEED = 0.001;
const GADGET_SPEED = 0.01;
const MOUSE_SPEED = 0.05;

const GITHUB = "https://github.com/rustam-tolipov";
const LINKEDIN = "https://www.linkedin.com/in/rustam-tolipov/";
const EMAIL = "mailto:rustamxontolipov788@gmail.com";
const INSTAGRAM = "https://www.instagram.com/rustamtolipov_/";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const PROJECTS_SECTION = "projects";
const TV_SECTION = "tv";
const EXPERIENCE_SECTION = "experience";
const WELCOME_SECTION = "welcome";
const DESKTOP_SECTION = "desktop";
const CONTACT_SECTION = "contact";
const SCROLLABLE_SECTION = "scroll";

const BASE_URL = window.location.origin;

const positions = [
  { name: "desktop", start: 10, end: 14 },
  { name: "projects", start: 23, end: 28 },
  { name: "tv", start: 50, end: 54 },
  { name: "experience", start: 63, end: 84 },
  { name: "welcome", start: 0, end: 6 },
];

export {
  ZERO,
  BLUR,
  END_OF_LANDING,
  SPEED_FACTOR,
  DAMPING_FACTOR,
  SCROLL_SPEED,
  FREQUENCY,
  CLOCK_SPEED,
  GADGET_SPEED,
  MOUSE_SPEED,
  GITHUB,
  LINKEDIN,
  EMAIL,
  INSTAGRAM,
  BASE_URL,
  isMobile,
  positions,
  PROJECTS_SECTION,
  TV_SECTION,
  EXPERIENCE_SECTION,
  WELCOME_SECTION,
  DESKTOP_SECTION,
  CONTACT_SECTION,
  SCROLLABLE_SECTION,
};
