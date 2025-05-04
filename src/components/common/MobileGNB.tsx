import menuIcon from "@/assets/icons/menu.svg";
import { useState } from "react";
import Drawer from "./Drawer";

export default function MobileGNB() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 h-14 w-full bg-white py-4 pl-4">
      <button onClick={() => setShowDrawer(true)} aria-label="메뉴 열기">
        <img src={menuIcon} alt="메뉴 아이콘" className="h-6 w-6" />
      </button>
      {showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
    </header>
  );
}
