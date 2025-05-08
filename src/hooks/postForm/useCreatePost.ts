import { useMutation, useQueryClient } from "@tanstack/react-query";
import postApis from "@/api/postApis";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@/constant";

export default function useCreatePost(title: string, content: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => postApis.createPost(title, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] });
      navigate("/");
    },
  });

  return { createPost: mutation.mutate };
}
