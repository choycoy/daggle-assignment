import postApis from "@/api/postApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@/constant";

export default function useEditPost(postId: string | undefined, title: string, content: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => postApis.modifyPost(postId, title, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPost, postId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPosts] });
      navigate("/");
    },
  });
  return { editPost: mutation.mutate };
}
