import { IconProps } from "@/interfaces";
import { FC, memo } from "react";

export const CloseIcon: FC<IconProps> = ({
  className = "w-6 h-6",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default memo(CloseIcon);
