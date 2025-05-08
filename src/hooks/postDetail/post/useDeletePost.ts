import { useMutation, useQueryClient } from "@tanstack/react-query";
import postApis from "@/api/postApis";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@/constant";

export default function useDeletePost(postId: string | undefined) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => postApis.deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] });
      navigate("/");
    },
  });
  return { deletePost: mutation.mutate };
}
