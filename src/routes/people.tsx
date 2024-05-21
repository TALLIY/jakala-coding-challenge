import { useMemo } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantPeopleData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const People: React.FC = () => {
  const { data: people, isFetching } = useStarWarsApi(
    StarWarsApiItemCategoriesEnum.PEOPLE
  );

  const columns = useMemo(
    () => RelevantPeopleData.map((value) => value.split("_").join(" ")),
    []
  );

  const rows = useMemo(
    () =>
      people?.map((person) =>
        Object.entries(person)
          .filter(([key, _]) => RelevantPeopleData.includes(key as string))
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
    [people]
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
