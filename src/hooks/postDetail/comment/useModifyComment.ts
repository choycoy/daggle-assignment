import { useMutation } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS, ERROR_MESSAGES } from "@/constant";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useModifyComment() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      postId,
      accessToken,
      commentId,
      content,
    }: {
      postId: string | undefined;
      accessToken: string | null;
      commentId: string;
      content: string;
    }) => {
      const response = await commentApis.modifyComment(postId, accessToken, commentId, content);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 403) {
        alert(ERROR_MESSAGES.modifyForbiddenMsg);
      } else {
        alert("댓글 수정에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });
  return { modifyComment: mutation.mutate };
}
