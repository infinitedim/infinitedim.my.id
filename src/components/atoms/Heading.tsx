"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { cn } from "@/utils";
import type { HeadingProps } from "@/interfaces";
import "@total-typescript/ts-reset";

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <motion.h1
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.h1>
  );
};
Heading.displayName = "Heading";

export default memo(Heading);
