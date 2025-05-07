import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant";
import postApis from "@/api/postApis";

export default function useGetPost(postId: string | undefined, enabled: boolean | undefined) {
  const { data: postInfo, isLoading: isPostLoading } = useQuery({
    queryKey: [QUERY_KEYS.getPost, postId],
    queryFn: () => postApis.getPostDetail(postId),
    enabled: !!postId && enabled,
  });
  return {
    postInfo,
    isPostLoading,
  };
}
