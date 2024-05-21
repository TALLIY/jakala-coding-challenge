import { useEffect, useMemo, useState } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { Button } from "../components/button";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantVehicleData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Vehicles: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: vehicles,
    isFetching,
    refetch,
    nextPage,
  } = useStarWarsApi({
    starwarsApiItemCategory: StarWarsApiItemCategoriesEnum.VEHICLES,
    page: page,
  });

  const columns = useMemo(
    () => RelevantVehicleData.map((value) => value.split("_").join(" ")),
    []
  );

  const rows = useMemo(
    () =>
      vehicles?.map((vehicle) =>
        Object.entries(vehicle)
          .filter(([key, _]) => RelevantVehicleData.includes(key as string))
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
    [vehicles]
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
