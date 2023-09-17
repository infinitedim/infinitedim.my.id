"use client";

import { AnimationableSVGProps } from "@/interfaces";
import { memo } from "react";
import { motion } from "framer-motion";

function MenuIcon({ className, variants, ...props }: AnimationableSVGProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      variants={variants}
      className={`${className} w-6 h-6`}
      {...props}
    >
      <motion.path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </motion.svg>
  );
}

export default memo(MenuIcon);
