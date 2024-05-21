import { useQuery } from "@tanstack/react-query";

import { STAR_WARS_API_URL } from "./constants.ts";
import { ResponseType } from "./types.ts";
import { StarWarsApiItemCategoriesEnum } from "../../../model/starwars/starwars.ts";

export const useStarWarsApi = <T extends StarWarsApiItemCategoriesEnum>({
  starwarsApiItemCategory,
  page,
  query,
}: {
  starwarsApiItemCategory: StarWarsApiItemCategoriesEnum;
  page?: number;
  query?: string;
}): {
  data: ResponseType<T>[];
  isFetching: boolean;
  refetch: () => void;
  nextPage: boolean;
} => {
  const url = new URL(`${STAR_WARS_API_URL}${starwarsApiItemCategory}`);
  if (page && page > 1) url.searchParams.append("page", page.toString());
  if (query) url.searchParams.append("search", query);

  const { data, isFetching, refetch } = useQuery({
    queryKey: [`${starwarsApiItemCategory}`],
    queryFn: () => fetch(url.toString()).then((res) => res.json()),
  });

  return {
    data: data?.results,
    isFetching: isFetching,
    refetch: refetch,
    nextPage: !!data?.next,
  };
};
