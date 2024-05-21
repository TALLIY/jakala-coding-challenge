import { useMemo } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantFilmData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Films: React.FC = () => {
  const { data: films, isFetching } = useStarWarsApi(
    StarWarsApiItemCategoriesEnum.FILMS
  );

  const columns = useMemo(
    () => RelevantFilmData.map((value) => value.split("_").join(" ")),
    []
  );

  const rows = useMemo(
    () =>
      films?.map((film) =>
        Object.entries(film)
          .filter(([key, _]) => RelevantFilmData.includes(key as string))
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
    [films]
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
