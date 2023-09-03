/* eslint-disable no-nested-ternary */

"use client";

import { HeadingProps } from "@/interfaces";
import { memo } from "react";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

function Heading({ as, children, className, ...props }: HeadingProps) {
  return as === "h1" ? (
    <h1
      {...props}
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      )}
    >
      {children}
    </h1>
  ) : as === "h2" ? (
    <h2
      {...props}
      className={cn(
        className,
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      )}
    >
      {children}
    </h2>
  ) : as === "h3" ? (
    <h3
      {...props}
      className={cn(
        className,
        "scroll-m-20 text-2xl font-semibold tracking-tight",
      )}
    >
      {children}
    </h3>
  ) : as === "h4" ? (
    <h4
      {...props}
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight",
      )}
    >
      {children}
    </h4>
  ) : (
    <h1
      {...props}
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      )}
    >
      {children}
    </h1>
  );
}

export default memo(Heading);
