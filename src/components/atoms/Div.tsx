"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { DivProps } from "@/interfaces";

export const Div = ({ children, ...props }: DivProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default memo(Div);
