import { useMutation, useQueryClient } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS, ERROR_MESSAGES } from "@/constant";
import { AxiosError } from "axios";

export default function useEditComment() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      postId,
      commentId,
      content,
    }: {
      postId: string | undefined;
      commentId: string;
      content: string;
    }) => {
      const response = await commentApis.editComment(postId, commentId, content);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 403) {
        alert(ERROR_MESSAGES.editForbiddenMsg);
      } else {
        alert("댓글 수정에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });
  return { editComment: mutation.mutate };
}
