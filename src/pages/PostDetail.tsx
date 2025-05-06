import CommentSection from "@/components/postDetail/CommentSection";
import PostBody from "@/components/postDetail/PostBody";
import { useParams } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "@/constant";
import useAuthRedirect from "@/hooks/common/useAuthRedirect";
import { isTokenExpired } from "@/utils/commonUtils";

export default function PostDetail() {
  const { id } = useParams();
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const isValidToken = !!accessToken && !isTokenExpired(accessToken);
  useAuthRedirect(isValidToken);
  const postId = id;

  if (!postId || !accessToken) return null;

  return (
    <div className="tab:mt-6 tab:mb-[100px] tab:border tab:border-gray-03 tab:rounded-xl tab:pt-6 w-full overflow-hidden bg-white pt-3">
      <PostBody postId={postId} accessToken={accessToken} />
      <CommentSection accessToken={accessToken} postId={postId} />
    </div>
  );
}
