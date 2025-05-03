import useGetPosts from "@/hooks/home/useGetPosts";
import { useState } from "react";
import commentIcon from "@/assets/icons/comment.svg";
import { Post } from "@/types/interface";
import dayjs from "dayjs";
import arrowLeftIcon from "@/assets/icons/arrow-left.svg";
import arrowRightIcon from "@/assets/icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const [pageNum, setPageNum] = useState(1);
  const { posts, isLoading } = useGetPosts(pageNum, 10);
  const navigate = useNavigate();
  if (!posts || isLoading) return null;
  const { currentPage, totalPages } = posts.meta;

  return (
    <>
      <div>
        {posts.items.map((post: Post) => {
          const { id, createdAt, title, commentCount } = post;
          return (
            <button
              key={id}
              onClick={() => navigate("post/${id}")}
              className="border-gray-03 flex w-full cursor-pointer items-center justify-between border-b px-6 py-4"
            >
              <p className="line-clamp-1 text-lg leading-[27px] tracking-[-0.054px]">{title}</p>
              <div className="text-gray-06 flex items-center leading-[24px] tracking-[-0.048px]">
                <p className="mr-2">{dayjs(createdAt).format("YY.MM.DD")}</p>
                <div className="mr-2 flex items-center gap-x-1.5">
                  <img alt="댓글 아이콘" src={commentIcon} className="h-5 w-5" />
                  <p className="leading-[24px] tracking-[-0.048px]">{commentCount}</p>
                </div>
                <div className="bg-gray-06 h-6 w-6 rounded-full" />
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-x-2 py-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setPageNum(currentPage - 1)}
          aria-label="이전 페이지로 이동"
          className={`${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <img src={arrowLeftIcon} alt="w-9 h-9" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            disabled={currentPage === i + 1}
            onClick={() => setPageNum(i + 1)}
            aria-label={`페이지 ${i + 1}로 이동`}
            aria-current={currentPage === i + 1 ? "page" : undefined}
            className={`flex h-9 w-9 cursor-pointer items-center justify-center leading-[22px] ${pageNum === i + 1 ? "bg-gray-03" : "rounded-sm bg-transparent"}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setPageNum(currentPage + 1)}
          aria-label="다음 페이지로 이동"
          className={`${currentPage === totalPages ? `cursor-not-allowed` : `cursor-pointer`}`}
        >
          <img src={arrowRightIcon} alt="w-9 h-9" />
        </button>
      </div>
    </>
  );
}
