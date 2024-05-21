import { useMemo } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantPlanetData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Planets: React.FC = () => {
  const { data: planets, isFetching } = useStarWarsApi(
    StarWarsApiItemCategoriesEnum.PLANETS
  );

  const columns = useMemo(
    () => RelevantPlanetData.map((value) => value.split("_").join(" ")),
    []
  );

  const rows = useMemo(
    () =>
      planets?.map((planet) =>
        Object.entries(planet)
          .filter(([key, _]) => RelevantPlanetData.includes(key as string))
          .map(([key, value]) =>
            LinkableValues.includes(key)
              ? {
                  title: value,
                  link: `${STAR_WARS_WIKI_URL}${(value as string)
                    .split(" ")
                    .join("_")}`,
                }
              : {
                  title: value,
                }
          )
      ),
    [planets]
  );

  return !isFetching ? (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  ) : (
    <div>
      <LoadingSpinner />
    </div>
  );
};
