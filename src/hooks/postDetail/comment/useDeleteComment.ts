import { useMutation, useQueryClient } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS } from "@/constant";

export default function useDeleteComment() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ postId, commentId }: { postId: string | undefined; commentId: string }) => {
      const response = await commentApis.deleteComment(postId, commentId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_COMMENTS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POST] });
    },
  });

  return { deleteComment: mutation.mutate };
}
