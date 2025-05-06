import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant";
import commentApis from "@/api/commentApis";

export default function useGetComments(postId: string | undefined, accessToken: string | null) {
  const { data: comments, isLoading: isCommentsLoading } = useQuery({
    queryKey: [QUERY_KEYS.getComments, postId],
    queryFn: () => commentApis.getComments(postId, accessToken),
    enabled: !!postId && !!accessToken,
  });
  return {
    comments,
    isCommentsLoading,
  };
}
