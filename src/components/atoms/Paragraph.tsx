"use client";

import { ParagraphProps } from "@/interfaces";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { memo } from "react";

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <motion.p
      {...props}
      className={cn(className)}
    >
      {children}
    </motion.p>
  );
}

export default memo(Paragraph);
