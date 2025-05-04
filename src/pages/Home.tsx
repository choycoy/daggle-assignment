import ImgCarousel from "@/components/home/ImgCarousel";
import PostList from "@/components/home/PostList";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="h-full w-full">
      <section className="mb-10">
        <h1 className="text-label pb-3 text-center text-lg leading-[1.5] font-bold">다글제작소</h1>
        <h2 className="mb-10 text-center text-[32px] leading-[1.6] font-bold">
          다글제작소의 과제전형에
          <br />
          오신 것을 환영합니다.
        </h2>
        <ImgCarousel />
      </section>
      <section className="w-full bg-white">
        <div className="border-gray-03 flex h-24 w-full items-center justify-between border-b px-6">
          <p className="text-2xl leading-[1.6] font-bold tracking-[-0.072px]">게시판</p>
          <button
            className="bg-primary text-whit flex h-12 w-[84px] cursor-pointer items-center justify-center rounded-lg leading-1.5 font-bold tracking-[-0.048px] text-white"
            onClick={() => {
              if (isLoggedIn) navigate("/post/wite");
              else {
                alert("로그인이 필요합니다.");
                navigate("/login");
              }
            }}
          >
            글쓰기
          </button>
        </div>
        <PostList />
      </section>
    </div>
  );
}
