import { useMutation, useQueryClient } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS } from "@/constant";

export default function usePostComment() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ postId, content }: { postId: string | undefined; content: string }) => {
      const response = await commentApis.postComment(postId, content);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
  });
  return { postComment: mutation.mutate };
}
