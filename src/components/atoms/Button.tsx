import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "@/constants/variants";
import { ButtonProps } from "@/interfaces";
import { cn } from "@/utils";
import { forwardRef, memo } from "react";
import "@total-typescript/ts-reset";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export default memo(Button);
