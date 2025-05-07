import CommentSection from "@/components/postDetail/CommentSection";
import PostBody from "@/components/postDetail/PostBody";
import { useParams } from "react-router-dom";
import useAuthRedirect from "@/hooks/common/useAuthRedirect";

export default function PostDetail() {
  const { id } = useParams();
  useAuthRedirect();
  const postId = id;

  if (!postId) return null;

  return (
    <div className="tab:mt-6 tab:mb-[100px] tab:border tab:border-gray-03 tab:rounded-xl tab:pt-6 w-full overflow-hidden bg-white pt-3">
      <PostBody postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
}
