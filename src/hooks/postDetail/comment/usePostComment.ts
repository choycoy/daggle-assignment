import { useMutation, useQueryClient } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS } from "@/constant";

export default function usePostComment(postId: string | undefined) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ content }: { content: string }) => {
      const response = await commentApis.postComment(postId, content);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPost, postId] });
    },
  });
  return { postComment: mutation.mutate };
}
