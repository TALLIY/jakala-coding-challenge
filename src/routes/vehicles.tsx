import { useMemo } from "react";

import { StarWarsApiItemCategoriesEnum } from "../../model/starwars/starwars";
import { LoadingSpinner } from "../components/loading-spinner";
import { Table } from "../components/table";
import {
  LinkableValues,
  RelevantVehicleData,
  STAR_WARS_WIKI_URL,
} from "../hooks/starwars/constants";
import { useStarWarsApi } from "../hooks/starwars/use-star-wars-api";

export const Vehicles: React.FC = () => {
  const { data: vehicles, isFetching } = useStarWarsApi(
    StarWarsApiItemCategoriesEnum.VEHICLES
  );

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
