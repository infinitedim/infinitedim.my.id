"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { AnimationableSVGProps } from "@/interfaces";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

const MenuIcon = ({
  animate,
  className = "h-6 w-6",
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
      className={cn(className)}
      initial={initial}
      variants={svgVariants}
      {...props}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default memo(MenuIcon);
