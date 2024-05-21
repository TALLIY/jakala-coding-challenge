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
  ...rest
}) => {
  return (
    <div className={twMerge("drawer", className)} {...rest}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
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
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
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
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {drawerContents.map((item) => (
            <li>
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
