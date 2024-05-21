import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { PagesEnum } from "../../model/pages/pages";
import { NavbarWithDrawer } from "../components/navbar-with-drawer";

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const drawerContents = useMemo(
    () =>
      Object.entries(PagesEnum).map(([key, value]) => ({
        title: key,
        link: value,
      })),
    []
  );

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-scroll">
      <NavbarWithDrawer
        title="Starwars Database"
        drawerContents={drawerContents}
        onTitleClick={() => navigate("/")}
      >
        <Outlet />
      </NavbarWithDrawer>
    </div>
  );
};
