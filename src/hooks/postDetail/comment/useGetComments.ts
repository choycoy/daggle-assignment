import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant";
import commentApis from "@/api/commentApis";

export default function useGetComments(postId: string | undefined) {
  const { data: comments, isLoading: isCommentsLoading } = useQuery({
    queryKey: [QUERY_KEYS.getComments, postId],
    queryFn: () => commentApis.getComments(postId),
    enabled: !!postId,
  });
  return {
    comments,
    isCommentsLoading,
  };
}
