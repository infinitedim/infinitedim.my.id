import { memo } from "react";
import { motion } from "framer-motion";
import type { AnimationableSVGProps } from "@/interfaces";

export const CloseIcon = ({
  animate,
  className = "w-6 h-6",
  initial,
  pathVariants,
  svgVariants,
  ...props
}: AnimationableSVGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      animate={animate}
      className={className}
      initial={initial}
      variants={svgVariants}
      {...props}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default memo(CloseIcon);
