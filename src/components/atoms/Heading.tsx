import { FC, forwardRef, memo } from "react";
import { cn } from "@/utils";
import { headingVariants } from "@/libs";
import { HeadingProps } from "@/interfaces";

const Heading: FC<HeadingProps> = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        className={cn(headingVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  },
);
Heading.displayName = "Heading";

export default memo(Heading);
