import postApis from "@/api/postApis";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@/constant";
import { useQueryClient } from "@tanstack/react-query";

export default function useEditPost(
  postId: string | undefined,
  title: string,
  content: string,
  accessToken: string | null,
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => postApis.modifyPost(postId, title, content, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPost, postId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPosts] });
      navigate("/");
    },
  });
  return { editPost: mutation.mutate };
}
