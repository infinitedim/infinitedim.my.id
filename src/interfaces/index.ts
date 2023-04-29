/* eslint-disable prettier/prettier */
import { HTMLAttributes, NamedExoticComponent } from "react";

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  color?: string;
  fill?: string;
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export interface BreakpointType {
  name: string;
  min: number;
  max: number;
}

export interface TechStackProjects {
  name: string;
  url: string;
  icon: NamedExoticComponent<IconProps>;
}

export interface ProjectsType {
  title: string;
  description: string;
  url: string;
  repo: string;
  techStack: TechStackProjects[];
}
