import CommentSection from "@/components/postDetail/CommentSection";
import PostBody from "@/components/postDetail/PostBody";
import usePostDetailLogic from "@/hooks/postDetail/usePostDetailLogic";

export default function PostDetail() {
  const { postId, accessToken } = usePostDetailLogic();
  if (!postId || !accessToken) return null;

  return (
    <div className="tab:mt-6 tab:mb-[100px] tab:border tab:border-gray-03 tab:rounded-xl tab:pt-6 w-full overflow-hidden bg-white pt-3">
      <PostBody postId={postId} accessToken={accessToken} />
      <CommentSection accessToken={accessToken} postId={postId} />
    </div>
  );
}
