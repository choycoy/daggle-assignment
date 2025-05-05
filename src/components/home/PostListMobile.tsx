import useGetInfinitePosts from "@/hooks/home/useGetInfinitePosts";
import PostList from "./PostList";
import { useRef, useEffect } from "react";
import writingIcon from "@/assets/icons/pencil.svg";

export default function PostListMobile({ handleWritingClick }: { handleWritingClick: () => void }) {
  const { data, fetchNextPage, hasNextPage } = useGetInfinitePosts();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) fetchNextPage();
      },
      { threshold: 0.1 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <div className="relative">
        <PostList postList={data?.pages.flatMap((page) => page.items) || []} />
        <div ref={observerRef} className="h-1" />
        <div className="pointer-events-none sticky bottom-0 left-0 h-[106px] w-full bg-gradient-to-t from-white to-white/0" />
        <button
          className="primary-btn shadow-writing fixed right-4 bottom-[50px] z-20 h-14 w-14 rounded-full p-4"
          onClick={handleWritingClick}
          aria-label="글쓰기"
        >
          <img src={writingIcon} alt="글쓰기 아이콘" className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}
