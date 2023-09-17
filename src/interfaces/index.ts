import { HeadingAsType } from "@/types";
import { HtmlHTMLAttributes } from "react";
import { SVGMotionProps, Variants } from "framer-motion";

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  as: HeadingAsType;
}

export interface AnimationableSVGProps extends SVGMotionProps<SVGSVGElement> {
  className?: string;
  pathVariants?: Variants | undefined;
  svgVariants?: Variants | undefined;
}
