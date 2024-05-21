import { PagesEnum } from "../../model/pages/pages.ts";
import { Films } from "../routes/films.tsx";
import { People } from "../routes/people.tsx";
import { Planets } from "../routes/planets.tsx";
import { Species } from "../routes/species.tsx";
import { Starships } from "../routes/starships.tsx";
import { Vehicles } from "../routes/vehicles.tsx";
import { Route } from "./types.ts";

export const pages: {
  [page in PagesEnum]: Route;
} = {
  [PagesEnum.PEOPLE]: {
    pageTitle: "pages.titles.people",
    element: <People />,
  },
  [PagesEnum.FILMS]: {
    pageTitle: "pages.titles.films",
    element: <Films />,
  },
  [PagesEnum.STARSHIPS]: {
    pageTitle: "pages.titles.starships",
    element: <Starships />,
  },
  [PagesEnum.VEHICLES]: {
    pageTitle: "pages.titles.vehicles",
    element: <Vehicles />,
  },
  [PagesEnum.SPECIES]: {
    pageTitle: "pages.titles.species",
    element: <Species />,
  },
  [PagesEnum.PLANETS]: {
    pageTitle: "pages.titles.planets",
    element: <Planets />,
  },
};
