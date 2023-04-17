import { FC, memo } from "react";
import { cn } from "@/utils";
import { HeadingProps } from "@/interfaces";
import "@total-typescript/ts-reset";

const Heading: FC<HeadingProps> = ({ className, children, ...props }) => {
  return (
    <h1
      className={cn(className)}
      {...props}
    >
      {children}
    </h1>
  );
};
Heading.displayName = "Heading";

export default memo(Heading);
