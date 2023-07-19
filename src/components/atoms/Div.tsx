"use client";

import { DivProps } from "@/interfaces";
import { motion } from "framer-motion";
import { memo } from "react";

function Div({ children, className, ...props }: DivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export default memo(Div);
