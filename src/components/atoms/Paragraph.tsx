"use client";

import { ParagraphProps } from "@/interfaces";
import { motion } from "framer-motion";
import { memo } from "react";

function Paragraph({ children, ...props }: ParagraphProps) {
  return <motion.p {...props}>{children}</motion.p>;
}

export default memo(Paragraph);
