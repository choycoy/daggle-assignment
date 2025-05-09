import { useAuthStore } from "@/store/useAuthStore";
import profileIcon from "@/assets/icons/circle-user.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import LogoImg from "../../../public/imgs/logo.png";
import { useNavigate } from "react-router-dom";

export default function DesktopGNB() {
  const [showNickname, setShowNickname] = useState(false);
  const { user, isLoggedIn } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };

  return (
    <header className="shadow-header border-gray-03 desktop:px-[120px] fixed top-0 left-0 z-50 h-[86px] w-full border-b bg-white px-[30px]">
      <div className="desktop:mx-auto flex h-full max-w-[1200px] items-center justify-between">
        <Link to="/" onClick={handleLogoClick}>
          <img src={LogoImg} alt="다글제작소 로고" className="h-5 w-[100px]" />
        </Link>
        {isLoggedIn ? (
          <button
            type="button"
            onClick={() => setShowNickname(!showNickname)}
            aria-label="프로필 보기"
            className="cursor-pointer"
          >
            <img src={profileIcon} alt="프로필 아이콘" />
          </button>
        ) : (
          <button
            type="button"
            className="cursor-pointer text-lg leading-[32px] font-semibold whitespace-nowrap"
            onClick={() => navigate("/login")}
          >
            로그인
          </button>
        )}
        {showNickname && (
          <div className="shadow-nickname desktop:right-[120px] fixed top-[105px] right-[30px] flex items-center gap-x-3 rounded-xl bg-white px-6 py-5">
            {user?.profileImageUrl ? (
              <img
                src={user.profileImageUrl}
                alt={`${user?.nickname ?? "다글다글"} 님의 프로필 이미지`}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="bg-gray-06 h-8 w-8 rounded-full" />
            )}
            <p className="text-lg leading-[1.5] font-semibold">{user?.nickname ?? "다글다글"} 님</p>
          </div>
        )}
      </div>
    </header>
  );
}
