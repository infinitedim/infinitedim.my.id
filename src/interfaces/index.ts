import { ButtonTypes, HeadingAsType } from "@/types";
import { ReactNode, RefObject } from "react";
import { HTMLMotionProps, SVGMotionProps, Variants } from "framer-motion";

export interface AnimationableSVGProps extends SVGMotionProps<SVGSVGElement> {
  className?: string;
  pathVariants?: Variants | undefined;
  svgVariants?: Variants | undefined;
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  type: ButtonTypes;
}

export interface HeadingProps extends HTMLMotionProps<HeadingAsType> {
  as: HeadingAsType;
}

export interface ProgressBarProps extends SVGMotionProps<SVGSVGElement> {
  ref: RefObject<HTMLElement> | undefined;
}
