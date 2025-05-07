import chevronLeft from "@/assets/icons/chevron-left-gray06.svg";
import chevronRight from "@/assets/icons/chevron-right-gray06.svg";
import { useState } from "react";
import useGetPosts from "@/hooks/home/useGetPosts";
import PostList from "./PostList";

export default function PostListDesktop() {
  const [pageNum, setPageNum] = useState(1);
  const { posts, isLoading } = useGetPosts(pageNum, 10);
  if (!posts || isLoading) return null;

  const { currentPage, totalPages } = posts.meta;

  return (
    <>
      <div>
        <PostList postList={posts?.items} />
      </div>
      <div className="flex items-center justify-center gap-x-2 py-6">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setPageNum(currentPage - 1)}
          aria-label="이전 페이지로 이동"
          className={`${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <img src={chevronLeft} alt="w-9 h-9" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            type="button"
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
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setPageNum(currentPage + 1)}
          aria-label="다음 페이지로 이동"
          className={`${currentPage === totalPages ? `cursor-not-allowed` : `cursor-pointer`}`}
        >
          <img src={chevronRight} alt="w-9 h-9" />
        </button>
      </div>
    </>
  );
}
