import postApis from "@/api/postApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@/constant";
import { useMediaQuery } from "@react-hook/media-query";

export default function useEditPost(postId: string | undefined, title: string, content: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isMobile = useMediaQuery("(max-width:641px)");
  const mutation = useMutation({
    mutationFn: () => postApis.modifyPost(postId, title, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POST, postId] });
      queryClient.invalidateQueries({ queryKey: [isMobile ? QUERY_KEYS.GET_INFINITE_POSTS : QUERY_KEYS.GET_POSTS] });
      navigate("/");
    },
  });
  return { editPost: mutation.mutate };
}
