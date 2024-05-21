import { useMemo } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantSpeciesData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Species: React.FC = () => {
  const { data: species, isFetching } = useStarWarsApi(
    StarWarsApiItemCategoriesEnum.SPECIES
  );

  const columns = useMemo(
    () => RelevantSpeciesData.map((value) => value.split("_").join(" ")),
    []
  );

  const rows = useMemo(
    () =>
      species?.map((specie) =>
        Object.entries(specie)
          .filter(([key, _]) => RelevantSpeciesData.includes(key as string))
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
    [species]
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
