import { cva } from "class-variance-authority";

export const headingVariants = cva("text-mood-gray", {
  variants: {
    size: {
      default: "text-3xl md:text-4xl lg:text-5xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text-4xl",
    },
    weight: {
      bold: "font-black",
      default: "font-normal",
      light: "font-light",
      thin: "font-thin",
    },
  },
  defaultVariants: {
    size: "default",
    weight: "default",
  },
});

export const paragraphVariants = cva(
  "mb-2 max-w-prose font-medium text-mood-gray",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        lg: "text-3xl md:text-4xl lg:text-5x",
        sm: "text-lg sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
