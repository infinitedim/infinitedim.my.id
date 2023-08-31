"use client";

import { ParagraphProps } from "@/interfaces";
import { cn } from "@/utils";
import { memo } from "react";

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      {...props}
      className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}
    >
      {children}
    </p>
  );
}

export default memo(Paragraph);
