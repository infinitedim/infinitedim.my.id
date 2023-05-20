"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { cn } from "@/utils";
import type { ParagraphProps } from "@/interfaces";
import "@total-typescript/ts-reset";

const Paragraph = ({ className, children, ...props }: ParagraphProps) => {
  return (
    <motion.p
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.p>
  );
};
Paragraph.displayName = "Paragraph";

export default memo(Paragraph);
