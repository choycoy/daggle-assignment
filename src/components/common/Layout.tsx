import DesktopGNB from "./DesktopGNB";
import { ReactNode } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MobileGNB from "./MobileGNB";
import useAuthErrorHandler from "@/hooks/common/useAuthErrorHandler";
import { useLocation } from "react-router-dom";
import useAuthInit from "@/hooks/common/useAuthInit";

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 641px)");
  const location = useLocation();
  useAuthInit();
  useAuthErrorHandler();

  const isPostForm = location.pathname === "/post/write";

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
