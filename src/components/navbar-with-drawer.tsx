import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { BurgerMenu } from "./burger-menu";
import { Button } from "./button";

export type NavbarWithDrawerProps = JSX.IntrinsicElements["div"] &
  PropsWithChildren<{
    title: string;
    drawerContents: { title: string; link: string }[];
    className?: string;
    onTitleClick?: () => void;
  }>;

export const NavbarWithDrawer: React.FC<NavbarWithDrawerProps> = ({
  title,
  drawerContents,
  className,
  children,
  onTitleClick,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <div className={twMerge("drawer", className)} {...rest}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-base-100">
          <div className="flex-none">
            <label htmlFor="my-drawer" className="drawer-button w-fit">
              <BurgerMenu />
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl" onClick={onTitleClick}>
              {title}
            </a>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {drawerContents.map((item, index) => (
            <li key={index}>
              <Button
                className="link"
                onClick={() => navigate(item.link)}
                text={item.title}
              >
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
