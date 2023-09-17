"use client";

import { AnimationableSVGProps } from "@/interfaces";
import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

function MenuIcon({
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
      strokeWidth="1.5"
      stroke="currentColor"
      variants={svgVariants}
      className={cn(`${className} h-6 w-6`)}
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
}

export default memo(MenuIcon);
