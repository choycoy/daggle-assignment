import { useQuery } from "@tanstack/react-query";
import homeApis from "@/api/homeApis";
import { QUERY_KEYS } from "@/constant";

export default function useGetPosts(pageNum: number, limit: number = 10) {
  const { data: posts, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.getPosts, pageNum],
    queryFn: () => homeApis.getPosts(pageNum, limit),
    placeholderData: (prevData) => prevData,
  });

  return { posts, isLoading };
}
