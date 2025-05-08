import DesktopGNB from "./DesktopGNB";
import { ReactNode } from "react";
import { useMediaQuery } from "@/hooks/common/useMediaQuery";
import MobileGNB from "./MobileGNB";
import useAuthErrorHandler from "@/hooks/common/useAuthErrorHandler";
import { useLocation } from "react-router-dom";
import useAuthInit from "@/hooks/common/useAuthInit";
import { useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery();
  const location = useLocation();
  useAuthInit();
  useAuthErrorHandler();
  useEffect(() => {
    const scrollY = window.scrollY;
    if (scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  const isPostForm = location.pathname === "/post/write";

  return (
    <div className="tab:bg-gray-01 tab:items-center tab:justify-center flex min-h-screen w-full flex-col">
      {isMobile && !isPostForm && <MobileGNB />}
      {!isMobile && <DesktopGNB />}
      <main className="tab:bg-gray-01 desktop:px-[120px] tab:pt-[86px] tab:px-[30px] desktop:max-w-[1440px] h-full w-full flex-1 pt-14">
        {children}
      </main>
    </div>
  );
}
