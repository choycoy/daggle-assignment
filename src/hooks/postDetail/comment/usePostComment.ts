import { useMutation } from "@tanstack/react-query";
import commentApis from "@/api/commentApis";
import { QUERY_KEYS } from "@/constant";
import { useQueryClient } from "@tanstack/react-query";

export default function usePostComment() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      postId,
      accessToken,
      content,
    }: {
      postId: string | undefined;
      accessToken: string | null;
      content: string;
    }) => {
      const response = await commentApis.postComment(postId, accessToken, content);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
  });
  return { postComment: mutation.mutate };
}
