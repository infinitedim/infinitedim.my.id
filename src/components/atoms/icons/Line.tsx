"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import type { AnimationableSVGProps } from "@/interfaces";
import { cn } from "@/utils";

export const Line = ({
  animate,
  className,
  initial,
  pathVariants,
  svgVariants,
  ...props
}: AnimationableSVGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="166"
      height="14"
      viewBox="0 0 166 14"
      fill="none"
      animate={animate}
      className={cn(className)}
      initial={initial}
      variants={svgVariants}
      {...props}
    >
      <motion.path
        d="M1.30561 12.6746C47.3712 -6.3858 165.081 4.09154 165.081 4.09154"
        stroke="#0F172A"
        stroke-width="2"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default memo(Line);
