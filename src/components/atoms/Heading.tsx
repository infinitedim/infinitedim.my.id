/* eslint-disable no-nested-ternary */

"use client";

import { HeadingProps } from "@/interfaces";
import { memo } from "react";
import { cn } from "@/utils";

function Heading({ as, children, className, ...props }: HeadingProps) {
  return as === "h1" ? (
    <h1
      {...props}
      className={cn(className)}
    >
      {children}
    </h1>
  ) : as === "h2" ? (
    <h2
      {...props}
      className={cn(className)}
    >
      {children}
    </h2>
  ) : as === "h3" ? (
    <h3
      {...props}
      className={cn(className)}
    >
      {children}
    </h3>
  ) : as === "h4" ? (
    <h4
      {...props}
      className={cn(className)}
    >
      {children}
    </h4>
  ) : (
    <h1
      {...props}
      className={cn(className)}
    >
      {children}
    </h1>
  );
}

export default memo(Heading);
