import { useQuery } from "@tanstack/react-query";
import { StarWarsApiItemCategoriesEnum } from "../../../model/starwars/starwars.ts";
import { ResponseType } from "./types.ts";
import { STAR_WARS_API_URL } from "./constants.ts";

export const useStarWarsApi = <T extends StarWarsApiItemCategoriesEnum>({
  starwarsApiItemCategory,
}: {
  starwarsApiItemCategory: StarWarsApiItemCategoriesEnum;
}): { data: ResponseType<T>; isFetching: boolean } => {
  const { data, isFetching } = useQuery({
    queryKey: [`${starwarsApiItemCategory}`],
    queryFn: () =>
      fetch(`${STAR_WARS_API_URL}${starwarsApiItemCategory}`).then((res) =>
        res.json()
      ),
  });

  return { data: data, isFetching: isFetching };
};
