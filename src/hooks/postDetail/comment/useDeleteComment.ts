import { useMutation, useQueryClient } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS, UI_ERRORS } from "@/constant";
import { AxiosError } from "axios";

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
    onError: (error: AxiosError) => {
      if (error?.response?.status === 403) {
        alert(UI_ERRORS.DELETE_FORBIDDEN_MSG);
      } else {
        alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });

  return { deleteComment: mutation.mutate };
}
