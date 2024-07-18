import { ReactNode } from "react";
import { HTMLMotionProps, SVGMotionProps, Variants } from "framer-motion";
import { ButtonType, HeadingTypeAs, TextType } from "@/constants";

export interface AnimationableSVGProps extends SVGMotionProps<SVGSVGElement> {
  className?: string;
  pathVariants?: Variants | undefined;
  svgVariants?: Variants | undefined;
}

export interface HeroImageProps extends HTMLMotionProps<"div"> {}

export interface TextProps extends HTMLMotionProps<keyof typeof TextType> {
  type?: keyof typeof TextType;
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

export type ButtonOrLinkProps =
  | (HTMLMotionProps<"button"> & {
      children: ReactNode;
      className?: string;
      type: keyof typeof ButtonType;
    })
  | (HTMLMotionProps<"a"> & {
      children: ReactNode;
      className?: string;
    });
