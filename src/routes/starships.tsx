import { useMemo } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantStarshipData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Starships: React.FC = () => {
  const { data: starships, isFetching } = useStarWarsApi(
    StarWarsApiItemCategoriesEnum.STARSHIPS
  );

  const columns = useMemo(
    () => RelevantStarshipData.map((value) => value.split("_").join(" ")),
    []
  );

  const rows = useMemo(
    () =>
      starships?.map((starship) =>
        Object.entries(starship)
          .filter(([key, _]) => RelevantStarshipData.includes(key as string))
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
    [starships]
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
