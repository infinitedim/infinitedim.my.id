import { FC, forwardRef, memo } from "react";
import { cn } from "@/utils";
import { paragraphVariants } from "@/libs";
import { ParagraphProps } from "@/interfaces";

const Paragraph: FC<ParagraphProps> = forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ className, size, children, ...props }, ref) => {
  return (
    <p
      className={cn(paragraphVariants({ size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});

Paragraph.displayName = "Paragraph";

export default memo(Paragraph);
