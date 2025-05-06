import dayjs from "dayjs";
import commentIcon from "@/assets/icons/comment-gray08.svg";
import useGetPost from "@/hooks/postDetail/post/useGetPost";
import { ERROR_MESSAGES } from "@/constant";
import useDeletePost from "@/hooks/postDetail/post/useDeletePost";
import { useNavigate } from "react-router-dom";

export default function PostBody({ postId, accessToken }: { postId: string | undefined; accessToken: string | null }) {
  const { postInfo, isPostLoading } = useGetPost(postId, accessToken, false);
  const { deletePost } = useDeletePost(postId);
  const navigate = useNavigate();

  if (!postInfo || isPostLoading) return null;

  const { title, author, content, commentCount, isAuthor } = postInfo;
  const PostInfo = () => (
    <div
      className={`text-gray-06 tab:text-base tab:leading-[24px] tab:tracking-[-0.048px] flex items-center gap-x-3 text-sm leading-[21px] tracking-[-0.042px] ${!isAuthor ? "tab:my-6 mt-2 mb-4" : ""}`}
    >
      <p>{author.nickname}</p>
      <span className="bg-gray-03 h-5 w-0.5" />
      <p>{dayjs(author.createdAt).format("YYYY.MM.DD")}</p>
    </div>
  );
  const handleDelete = () => {
    const confirmed = window.confirm(ERROR_MESSAGES.deletePost);
    if (confirmed) deletePost();
  };

  return (
    <section>
      <div className="tab:px-6 px-4">
        <h1 className="tab:text-2xl tab:tracking-[-0.072px] tab:leading-[36px] text-lg leading-[27px] font-bold tracking-[-0.054px]">
          {title}
        </h1>
        {isAuthor ? (
          <div className="tab:my-6 mt-2 mb-4 flex items-center justify-between">
            <PostInfo />
            <div className="text-gray-07 tab:leading-[24px] tab:tracking-[-0.048px] tab:text-base flex items-center gap-x-3 text-sm leading-[21px] tracking-[-0.042px]">
              <button
                className="cursor-pointer"
                onClick={() => navigate("/post/write", { state: { isEdit: true, postId: postId } })}
              >
                수정
              </button>
              <button className="cursor-pointer" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        ) : (
          <PostInfo />
        )}
      </div>
      <div className="tab:border-y border-gray-03 tab:h-[261px] tab:p-6 flex flex-col justify-between border-b px-4">
        <p className="tab:h-auto h-[183px] leading-[24px] tracking-[-0.048px]">{content}</p>
        <div className="tab:h-7 text-gray-08 tab:my-0 my-4 flex h-[21px] items-center gap-x-2">
          <img src={commentIcon} alt="댓글 아이콘" className="h-[19px] w-[19px]" />
          <p className="tab:leading-[24px] tab:tracking-[-0.048px] tab:text-base text-sm leading-[21px] tracking-[-0.042px]">
            {commentCount}개
          </p>
        </div>
      </div>
    </section>
  );
}
