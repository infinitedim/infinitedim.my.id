"use client";

import { DivProps } from "@/interfaces";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { memo } from "react";

function Div({ children, className, ...props }: DivProps) {
  return (
    <motion.div
      {...props}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export default memo(Div);
