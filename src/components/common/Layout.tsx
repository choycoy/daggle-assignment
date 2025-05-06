import DesktopGNB from "./DesktopGNB";
import { ReactNode } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MobileGNB from "./MobileGNB";
import useIsLogin from "@/hooks/auth/useIsLogin";

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 641px)");
  useIsLogin();

  return (
    <div className="flex min-h-screen w-full flex-col">
      {isMobile ? <MobileGNB /> : <DesktopGNB />}
      <main className="tab:bg-gray-01 desktop:px-[120px] tab:pt-[86px] tab:px-[30px] h-full flex-1 pt-14">
        {children}
      </main>
    </div>
  );
}
