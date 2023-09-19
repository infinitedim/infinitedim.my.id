"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { memo } from "react";
import { ButtonProps } from "@/interfaces";

function Button({ children, className, type, ...props }: ButtonProps) {
  return (
    <motion.button
      {...props}
      className={cn(className)}
      type={type !== undefined ? type : "button"}
    >
      {children}
    </motion.button>
  );
}

export default memo(Button);
