import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant";
import postApis from "@/api/postApis";
import { useAuthStore } from "@/store/useAuthStore";

export default function useGetPost(postId: string | undefined, enabled: boolean | undefined) {
  const { isLoggedIn } = useAuthStore();
  const { data: postInfo, isLoading: isPostLoading } = useQuery({
    queryKey: [QUERY_KEYS.getPost, postId],
    queryFn: () => postApis.getPostDetail(postId),
    enabled: !!postId && enabled && isLoggedIn,
  });
  return {
    postInfo,
    isPostLoading,
  };
}
