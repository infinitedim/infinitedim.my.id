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
      opacity: 1,
      rotate: 0,
      ease: "easeInOut",
    },
  },
};

export const cardVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
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
