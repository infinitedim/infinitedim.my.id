"use client";

import { memo } from "react";
import { motion, useScroll } from "framer-motion";
import type { ProgressBarProps } from "@/interfaces";

export const ProgressBar = ({ ...props }: ProgressBarProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 bg-mood-gray h-[5px] z-[99] origin-[0%]"
      style={{ scaleX: scrollYProgress }}
      {...props}
    />
  );
};

export default memo(ProgressBar);
