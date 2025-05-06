import { useMutation, useQueryClient } from "@tanstack/react-query";
import postApis from "@/api/postApis";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@/constant";

export default function useCreatePost(title: string, content: string, accessToken: string | null) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => postApis.createPost(title, content, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getPosts] });
      navigate("/");
    },
  });

  return { createPost: mutation.mutate };
}
