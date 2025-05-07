import { useMutation, useQueryClient } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS, ERROR_MESSAGES } from "@/constant";
import { AxiosError } from "axios";

export default function useDeleteComment() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ postId, commentId }: { postId: string | undefined; commentId: string }) => {
      const response = await commentApis.deleteComment(postId, commentId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPost] });
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 403) {
        alert(ERROR_MESSAGES.deleteForbiddenMsg);
      } else {
        alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });

  return { deleteComment: mutation.mutate };
}
