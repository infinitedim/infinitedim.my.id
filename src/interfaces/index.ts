/* eslint-disable prettier/prettier */
import { HTMLAttributes } from "react";

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
