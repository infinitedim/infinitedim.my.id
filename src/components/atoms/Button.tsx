"use client";

import { ButtonProps } from "@/interfaces";
import { cn } from "@/utils";
import { memo } from "react";
import { motion } from "framer-motion";
import "@total-typescript/ts-reset";

export const Button = ({
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
Button.displayName = "Button";

export default memo(Button);
