import { useMutation } from "@tanstack/react-query";
import postApis from "@/api/postApis";
import { useNavigate } from "react-router-dom";

export default function useDeletePost(postId: string | undefined) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => postApis.deletePost(postId),
    onSuccess: () => navigate("/"),
  });
  return { deletePost: mutation.mutate };
}
