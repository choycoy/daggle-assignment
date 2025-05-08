import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant";
import postApis from "@/api/postApis";

export default function useGetInfinitePosts() {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QUERY_KEYS.GET_INFINITE_POSTS],
    queryFn: ({ pageParam = 1 }) => postApis.getPosts(pageParam, 10),
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });
}
