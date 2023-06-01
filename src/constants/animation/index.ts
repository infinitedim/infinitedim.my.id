export const pathVariants = {
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

export const menuIconAnimation = {
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

export const cardVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
    rotate: -10,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export const svgVariants = {
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
