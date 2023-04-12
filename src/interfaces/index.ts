/* eslint-disable prettier/prettier */
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { headingVariants, paragraphVariants } from "@/libs";

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  color?: string;
  fill?: string;
}

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export interface BreakpointType {
  name: string;
  min: number;
  max: number;
}
