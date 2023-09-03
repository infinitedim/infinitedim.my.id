import { buttonVariants } from "@/constants";
import { HeadingTypeAs } from "@/types";
import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  as: HeadingTypeAs;
}

export interface ParagraphProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  className?: string;
}
