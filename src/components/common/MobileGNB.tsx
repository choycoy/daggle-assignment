import menuIcon from "@/assets/icons/menu.svg";
import { useState } from "react";
import Drawer from "./Drawer";
import { useLocation, useNavigate } from "react-router-dom";
import chevronLeft from "@/assets/icons/chevron-left-gray09.svg";
import { handleBack } from "@/utils/commonUtils";

export default function MobileGNB() {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 z-50 h-14 w-full bg-white py-4 pl-4">
      {isHome ? (
        <button type="button" onClick={() => setShowDrawer(true)} aria-label="메뉴 열기">
          <img src={menuIcon} alt="메뉴 아이콘" className="h-6 w-6" />
        </button>
      ) : (
        <button type="button" onClick={() => handleBack(navigate)} aria-label="뒤로가기">
          <img src={chevronLeft} alt="뒤로가기 아이콘" className="h-6 w-6" />
        </button>
      )}
      {showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
    </header>
  );
}
