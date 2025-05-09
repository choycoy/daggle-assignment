import dayjs from "dayjs";
import { Comment } from "@/types/interface";
import useCommentSection from "@/hooks/postDetail/comment/useCommentSection";
import useDeleteComment from "@/hooks/postDetail/comment/useDeleteComment";
import useGetComments from "@/hooks/postDetail/comment/useGetComments";
import { STORAGE_KEYS } from "@/constant";

export default function CommentSection({ postId }: { postId: string | undefined }) {
  const { comments, isCommentsLoading } = useGetComments(postId);
  const { input, setInput, startEditing, isEditing, onEnterSubmit, onSubmit } = useCommentSection(postId);
  const { deleteComment } = useDeleteComment();
  const userId = localStorage.getItem(STORAGE_KEYS.USER_ID_KEY);

  if (!comments || isCommentsLoading) return null;

  return (
    <>
      <section>
        <ul className="bg-gray-01 tab:mb-0 mb-24 flex flex-col">
          {comments.map((comment: Comment) => {
            const { id, content, user, createdAt } = comment;
            const isAuthor = user.id === userId;

            return (
              <li
                key={id}
                className={`tab:p-6 tab:text-base tab:leading-[24px] tab:tracking-[-0.048px] border-gray-03 flex flex-col gap-y-4 border-b p-4 text-sm leading-[21px] tracking-[-0.042px]`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="tab:bg-gray-06 bg-gray-04 h-6 w-6 rounded-full" />
                    <p>{user.nickname ?? "익명"}</p>
                  </div>
                  {isAuthor && (
                    <div className="text-gray-06 flex items-center gap-x-3">
                      <button type="button" className="cursor-pointer" onClick={() => startEditing(comment)}>
                        수정
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => deleteComment({ postId: postId, commentId: id })}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-gray-08 text-base leading-[24px] tracking-[-0.048px]">{content}</p>
                <p className="text-gray-06 tab:text-base tab:leading-[24px] tab:tracking-[-0.048px] text-xs leading-[16.8px] tracking-[-0.036px]">
                  {dayjs(createdAt).format("YY.MM.DD")}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="tab:p-6 tab:static tab:gap-x-3 border-gray-03 tab:border-none fixed bottom-0 left-0 flex w-full items-center border-t bg-white px-4 py-6">
        <input
          type="text"
          placeholder="댓글을 통해 자유롭게 의견을 나눠보세요"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={onEnterSubmit}
          className="placeholder:text-gray-06 border-gray-03 tab:w-[calc(100%-101px)] tab:leading-[24px] tab:tracking-[-0.048px] tab:text-base w-[calc(100%-84px)] border-b p-3 text-sm leading-[21px] tracking-[-0.042px]"
        />
        <button
          disabled={!input}
          onClick={onSubmit}
          type="button"
          className={`black-btn tab:h-[52px] tab:w-[89px] h-12 w-[84px] rounded-lg leading-[24px] font-bold tracking-[-0.048px] ${!input ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {isEditing ? "수정" : "등록"}
        </button>
      </section>
    </>
  );
}
