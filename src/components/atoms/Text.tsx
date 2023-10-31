/* eslint-disable no-nested-ternary */

"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { memo } from "react";
import type { TextProps } from "@/interfaces";

function Text({ children, className, type, ...props }: TextProps) {
  return type === "p" ? (
    <motion.p
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.p>
  ) : type === "span" ? (
    <motion.span
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.span>
  ) : (
    <motion.p
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.p>
  );
}

export default memo(Text);
