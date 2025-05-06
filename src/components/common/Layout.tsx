import DesktopGNB from "./DesktopGNB";
import { ReactNode } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MobileGNB from "./MobileGNB";
import useIsLogin from "@/hooks/auth/useIsLogin";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 641px)");
  const location = useLocation();
  const isPostForm = location.pathname === "/post/write";
  useIsLogin();

  return (
    <div className="flex min-h-screen w-full flex-col">
      {isMobile && !isPostForm && <MobileGNB />}
      {!isMobile && <DesktopGNB />}
      <main className="tab:bg-gray-01 desktop:px-[120px] tab:pt-[86px] tab:px-[30px] h-full flex-1 pt-14">
        {children}
      </main>
    </div>
  );
}
