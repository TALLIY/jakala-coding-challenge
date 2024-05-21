import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { BurgerMenu } from "./burger-menu";

export type NavbarWithDrawerProps = JSX.IntrinsicElements["div"] &
  PropsWithChildren<{
    title: string;
    drawerContents: { title: string; link?: string }[];
    className?: string;
  }>;

export const NavbarWithDrawer: React.FC<NavbarWithDrawerProps> = ({
  title,
  drawerContents,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={twMerge("drawer", className)} {...rest}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-base-100">
          <div className="flex-none">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              <BurgerMenu />
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">{title}</a>
          </div>
        </div>
        {children}
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
              <a className="link" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
