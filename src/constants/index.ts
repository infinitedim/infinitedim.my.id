import { Variants } from "framer-motion";

export const HeadingAs = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
} as const;

export const menuItems: Array<String> = [
  "About",
  "Blog",
  "Projects",
  "Contact",
  "Resume",
];

export const menuIconAnimation: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    rotate: 180,
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
