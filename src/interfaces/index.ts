import { ReactNode } from "react";
import { HTMLMotionProps, SVGMotionProps, Variants } from "framer-motion";
import { ButtonType, HeadingTypeAs } from "@/constants";

export interface AnimationableSVGProps extends SVGMotionProps<SVGSVGElement> {
  className?: string;
  pathVariants?: Variants | undefined;
  svgVariants?: Variants | undefined;
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  type: keyof typeof ButtonType;
}

export interface HeadingProps
  extends HTMLMotionProps<keyof typeof HeadingTypeAs> {
  as?: keyof typeof HeadingTypeAs;
}
