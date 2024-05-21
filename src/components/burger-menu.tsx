import { ElementType, PropsWithChildren } from "react";

export type BurgerMenuProps = JSX.IntrinsicElements["button"] &
  PropsWithChildren<{
    as?: ElementType;
    className?: string;
  }>;

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  as: Component = "div",
  ...rest
}) => {
  return (
    <Component className="btn btn-ghost w-full " {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </Component>
  );
};
