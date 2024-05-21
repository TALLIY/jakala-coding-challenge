import { useEffect, useMemo, useState } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { Button } from "../components/button";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantStarshipData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Starships: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: starships,
    isFetching,
    refetch,
    nextPage,
  } = useStarWarsApi({
    starwarsApiItemCategory: StarWarsApiItemCategoriesEnum.STARSHIPS,
    page,
  });

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

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return !isFetching && rows ? (
    <div>
      <Table columns={columns} rows={rows} pageNumber={page} />
      <div className="flex flex-row justify-between py-4 px-28">
        <Button
          text="back"
          disabled={page === 1}
          className={`${page === 1 ? "opacity-0" : "opacity-100"}`}
          onClick={() => {
            setPage(page - 1);
          }}
        />
        <Button
          text="next"
          disabled={!nextPage}
          className={`${!nextPage ? "opacity-0" : "opacity-100"}`}
          onClick={() => {
            setPage(page + 1);
          }}
        />
      </div>
    </div>
  ) : (
    <div className="overflow-x-auto w-[80%] flex flex-row justify-center">
      <LoadingSpinner />
    </div>
  );
};
