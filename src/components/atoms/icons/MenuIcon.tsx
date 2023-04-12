import { FC, memo } from "react";
import { IconProps } from "@/interfaces";

export const MenuIcon: FC<IconProps> = ({
  className = "h-6 w-6",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  );
};

export default memo(MenuIcon);
