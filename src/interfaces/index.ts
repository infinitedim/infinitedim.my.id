import type { NamedExoticComponent, ReactNode } from "react";
import type { HTMLMotionProps, SVGMotionProps, Variants } from "framer-motion";
import "@total-typescript/ts-reset";

export interface AnimationableSVGProps extends SVGMotionProps<SVGSVGElement> {
  animate?: string;
  className?: string;
  initial?: string | boolean;
  pathVariants?: Variants | undefined;
  svgVariants?: Variants | undefined;
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
}

export interface HeadingProps extends HTMLMotionProps<"h1"> {
  children: ReactNode;
  className?: string;
}

export interface ParagraphProps extends HTMLMotionProps<"p"> {
  children: ReactNode;
  className?: string;
}

export interface BreakpointType {
  name: string;
  min: number;
  max: number;
}

export interface TechStackProjects {
  name: string;
  url: string;
  icon: NamedExoticComponent<AnimationableSVGProps>;
}

export interface ProjectsType {
  title: string;
  description: string;
  url: string;
  repo: string;
  techStack: TechStackProjects[];
}

export interface menuItemType {
  anchor: string;
  name: string;
}
