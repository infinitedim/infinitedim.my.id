"use client";

import { AnimationableSVGProps } from "@/interfaces";
import React, { memo } from "react";
import { motion } from "framer-motion";

function CloseIcon({ className, ...props }: AnimationableSVGProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} w-6 h-6`}
      {...props}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </motion.svg>
  );
}

export default memo(CloseIcon);
