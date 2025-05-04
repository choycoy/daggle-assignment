import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant";
import homeApis from "@/api/homeApis";

export default function useGetInfinitePosts() {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QUERY_KEYS.getInfinitePosts],
    queryFn: ({ pageParam = 1 }) => homeApis.getPosts(pageParam, 10),
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });
}
