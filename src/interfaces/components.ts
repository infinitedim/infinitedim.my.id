import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
}

export interface DivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export interface ParagraphProps extends HTMLMotionProps<"p"> {
  children: ReactNode;
  className?: string;
}

export interface HeadingProps
  extends HTMLMotionProps<"h1">,
    HTMLMotionProps<"h2">,
    HTMLMotionProps<"h3">,
    HTMLMotionProps<"h4">,
    HTMLMotionProps<"h5">,
    HTMLMotionProps<"h6"> {
  as: string | boolean;
  children: ReactNode;
  className?: string;
}
