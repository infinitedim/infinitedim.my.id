import { ButtonTypes, HeadingTypeAs } from "@/types";
import { HTMLMotionProps, SVGMotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface AnimationableIcons extends SVGMotionProps<SVGSVGElement> {
  svgVariants: any;
  pathVariants: any;
  className: string;
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  type: ButtonTypes;
}

export interface DivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string | undefined;
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
  as: HeadingTypeAs;
  children: ReactNode;
  className?: string;
}

export interface FooterProps extends HTMLMotionProps<"footer"> {
  className?: string;
  chidren: ReactNode;
}
