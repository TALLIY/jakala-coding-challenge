import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = JSX.IntrinsicElements["button"] &
  PropsWithChildren<{
    text: string;
    className?: string;
  }>;

export const Button: React.FC<ButtonProps> = ({ text, className, ...rest }) => {
  return (
    <button className={twMerge("btn", className)} {...rest}>
      {text}
    </button>
  );
};
