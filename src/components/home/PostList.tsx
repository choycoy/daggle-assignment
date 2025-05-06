import commentIcon from "@/assets/icons/comment-gray06.svg";
import { Post } from "@/types/interface";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function PostList({ postList }: { postList: Post[] | undefined }) {
  const navigate = useNavigate();
  if (!postList) return null;
  const PostInfo = ({ createdAt, commentCount }: { createdAt: string; commentCount: number }) => (
    <>
      <p>{dayjs(createdAt).format("YY.MM.DD")}</p>
      <div className="flex items-center gap-x-1">
        <img alt="댓글 아이콘" src={commentIcon} className="tab:w-[22px] tab:h-[22px] h-5 w-5" />
        <p className="leading-[24px] tracking-[-0.048px]">{commentCount}</p>
      </div>
    </>
  );
  return (
    <>
      {postList.map((post: Post) => {
        const { id, createdAt, title, commentCount } = post;
        return (
          <button
            key={id}
            onClick={() => navigate(`post/${id}`)}
            className="border-gray-03 tab:px-6 tab:flex-row tab:items-center tab:justify-between tab:text-center tab:gap-y-0 flex w-full cursor-pointer flex-col gap-y-3 border-b py-4 text-left"
          >
            <p className="tab:font-normal tab:text-lg tab:leading-[27px] tab:tracking-[-0.054px] line-clamp-1 text-base leading-[24px] font-semibold tracking-[-0.048px]">
              {title}
            </p>
            <div className="text-gray-06 tab:leading-[24px] tab:tracking-[-0.048px] tab:text-base tab:justify-baseline flex items-center justify-between gap-x-2 text-sm leading-[21px] tracking-[-0.042px]">
              <div className="tab:flex hidden items-center gap-x-2">
                <PostInfo createdAt={createdAt} commentCount={commentCount} />
              </div>
              <div className="tab:hidden flex items-center gap-x-2">
                <PostInfo createdAt={createdAt} commentCount={commentCount} />
              </div>
              <div className="flex items-center gap-x-2">
                <div className="tab:bg-gray-06 bg-gray-04 h-6 w-6 rounded-full" />
                <p className="tab:hidden text-black">멋진무지개12</p>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
}
