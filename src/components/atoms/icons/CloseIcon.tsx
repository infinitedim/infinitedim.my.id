"use client";

import { AnimationableSVGProps } from "@/interfaces";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

function CloseIcon({
  className,
  svgVariants,
  pathVariants,
  ...props
}: AnimationableSVGProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn(`${className} h-6 w-6`)}
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
}

export default memo(CloseIcon);
