import { FC, memo } from "react";
import { cn } from "@/utils";
import { ParagraphProps } from "@/interfaces";

const Paragraph: FC<ParagraphProps> = ({ className, children, ...props }) => {
  return (
    <p
      className={cn(className)}
      {...props}
    >
      {children}
    </p>
  );
};
Paragraph.displayName = "Paragraph";

export default memo(Paragraph);
