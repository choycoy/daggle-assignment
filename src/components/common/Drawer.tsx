import closeIcon from "@/assets/icons/close.svg";
import { MENU_LIST } from "@/constant";
import { useAuthStore } from "@/store/useAuthStore";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDisableScroll from "@/hooks/common/useDisableScroll";
import useLogout from "@/hooks/auth/useLogout";
import { UI_ERRORS } from "@/constant";

export default function Drawer({ setShowDrawer }: { setShowDrawer: (value: boolean) => void }) {
  const { user, isLoggedIn } = useAuthStore();
  const location = useLocation();
  useDisableScroll(true);
  const { logout } = useLogout();
  const handleClick = (e: React.MouseEvent, id: number) => {
    if (location.pathname === "/" && id === 1) {
      e.preventDefault();
    }
    setShowDrawer(false);
  };
  const handleLogout = () => {
    const confirmed = window.confirm(UI_ERRORS.LOGOUT);
    if (confirmed) {
      logout();
      setShowDrawer(false);
    }
  };

  return (
    <section className={`fixed top-0 left-0 z-[51] h-full w-full bg-black/70`}>
      <div className="fixed top-0 left-0 z-[52] flex h-full w-[280px] flex-col gap-y-6 bg-white px-4 pt-8">
        <button type="button" className="cursor-pointer self-end" onClick={() => setShowDrawer(false)}>
          <img alt="메뉴 닫기 아이콘" className="h-10 w-10" src={closeIcon} />
        </button>
        {isLoggedIn ? (
          <div className="flex items-center gap-x-2">
            {user?.profileImageUrl ? (
              <img
                src={user?.profileImageUrl}
                alt={`${user?.nickname ?? "다글다글"} 님의 프로필 이미지`}
                className="h-[27px] w-[27px] rounded-full"
              />
            ) : (
              <div className="bg-gray-06 h-[27px] w-[27px] rounded-full" />
            )}
            <p className="leading-[24px] font-bold tracking-[-0.048px]">{user?.nickname ?? "다글다글"}</p>
          </div>
        ) : (
          <p>로그인</p>
        )}
        <hr className="w-[calc(100%-32px) text-gray-03" />
        <ul className="flex flex-col gap-y-6">
          {MENU_LIST.map((menu, index) => {
            const { id, item, path } = menu;
            return (
              <li key={id} className="leading-[24px] tracking-[-0.048px]">
                {index === 0 && isLoggedIn ? (
                  <button type="button" onClick={handleLogout}>
                    로그아웃
                  </button>
                ) : (
                  <Link to={path} onClick={(e) => handleClick(e, id)}>
                    {item}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
