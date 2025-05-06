import { useQuery } from "@tanstack/react-query";
import postApis from "@/api/postApis";
import { QUERY_KEYS } from "@/constant";

export default function useGetPosts(pageNum: number, limit: number = 10) {
  const { data: posts, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.getPosts, pageNum],
    queryFn: () => postApis.getPosts(pageNum, limit),
    placeholderData: (prevData) => prevData,
  });

  return { posts, isLoading };
}
