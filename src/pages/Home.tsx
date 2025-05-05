import ImgCarousel from "@/components/home/ImgCarousel";
import { useMediaQuery } from "@react-hook/media-query";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import PostListMobile from "@/components/home/PostListMobile";
import PostListDesktop from "@/components/home/PostListDesktop";

export default function Home() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 641px)");
  const handleWritingClick = () => {
    if (isLoggedIn) navigate("/post/write");
    else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  return (
    <div className="tab:mt-[100px] tab:mb-[100px] h-full w-full">
      <section className="tab:mb-10 tab:px-0 mb-8 px-4">
        <h1 className="text-gray-07 tab:text-lg tab:tracking-[-0.054px] pb-3 text-center text-base leading-[1.5] font-bold tracking-[-0.048px]">
          다글제작소
        </h1>
        <h2 className="tab:mb-10 tab:text-[32px] tab:tracking-[-0.096px] mb-6 text-center text-2xl leading-[1.6] font-bold tracking-[-0.072px]">
          다글제작소의 과제전형에
          <br />
          오신 것을 환영합니다.
        </h2>
        <ImgCarousel />
      </section>
      <div className="tab:hidden bg-alt relative h-3 w-full" />
      <section className="tab:pt-0 tab:px-0 w-full bg-white px-4 pt-8">
        <div className="tab:border-gray-03 tab:h-24 tab:border-b tab:px-6 flex w-full items-center justify-between">
          <p className="tab:text-2xl tab:tracking-[-0.072px] tab:mb-0 mb-4 text-xl leading-[1.6] font-bold tracking-[-0.06px]">
            게시판
          </p>
          <button
            className="primary-btn tab:flex hidden h-12 w-[84px] cursor-pointer items-center justify-center rounded-lg leading-1.5 font-bold tracking-[-0.048px]"
            onClick={handleWritingClick}
          >
            글쓰기
          </button>
        </div>
        {isMobile ? <PostListMobile handleWritingClick={handleWritingClick} /> : <PostListDesktop />}
      </section>
    </div>
  );
}
