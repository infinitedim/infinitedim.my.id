import type { Variants } from "framer-motion";

export const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1,
      opacity: 1,
    },
  },
};

export const svgVariants: Variants = {
  hidden: { rotate: 180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1,
      opacity: 1,
    },
  },
};
