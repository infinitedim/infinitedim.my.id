"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { AnimationableSVGProps } from "@/interfaces";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

export const ExtLinkIcon = ({
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
      viewBox="0 0 24 24"
      fill="none"
      animate={animate}
      className={cn(className)}
      initial={initial}
      variants={svgVariants}
      {...props}
    >
      <motion.path
        d="M13.5 6H5.25C4.65326 6 4.08097 6.23705 3.65901 6.65901C3.23705 7.08097 3 7.65326 3 8.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H15.75C16.3467 21 16.919 20.7629 17.341 20.341C17.7629 19.919 18 19.3467 18 18.75V10.5M7.5 16.5L21 3M21 3H15.75M21 3V8.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default memo(ExtLinkIcon);
