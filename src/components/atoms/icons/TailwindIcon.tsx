"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { AnimationableSVGProps } from "@/interfaces";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

const TailwindIcon = ({
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
      viewBox="0 0 24 24"
      animate={animate}
      className={cn(className)}
      initial={initial}
      variants={svgVariants}
      {...props}
    >
      <motion.path
        d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default memo(TailwindIcon);
