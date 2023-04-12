import { FC, HTMLAttributes, memo } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
  children,
  role = "button",
  ...props
}) => {
  return (
    <button role={role} type="button" {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
