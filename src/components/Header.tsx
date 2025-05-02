import { useAuthStore } from "@/store/useAuthStore";
import profileIcon from "@/assets/icons/circle-user.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import LogoImg from "@/assets/imgs/logo.png";

export default function Header() {
  const [showNickname, setShowNickname] = useState(false);
  const { user, isLoggedIn } = useAuthStore();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };

  return (
    <header className="border-b-gray-03 shadow-header fixed top-0 left-0 z-50 flex h-[86px] w-full items-center justify-between border-b bg-white px-[120px]">
      <Link to="/" onClick={handleLogoClick}>
        <img src={LogoImg} alt="다글제작소 로고" className="h-6 w-[120px]" />
      </Link>
      {isLoggedIn ? (
        <button onClick={() => setShowNickname(true)} aria-label="닉네임 보기">
          <img src={profileIcon} alt="프로필 아이콘" />
        </button>
      ) : (
        <span className="text-lg leading-[32px] font-semibold whitespace-nowrap">로그인</span>
      )}
      {showNickname && (
        <div className="shadow-nickname fixed top-[105px] right-[120px] flex items-center gap-x-3 rounded-xl bg-white px-6 py-5">
          <img
            src={user?.profileImageUrl}
            alt={`${user?.nickname} 님의 프로필 이미지`}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-lg leading-[1.5] font-semibold">{user?.nickname} 님</span>
        </div>
      )}
    </header>
  );
}
