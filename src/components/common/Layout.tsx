import DesktopGNB from "./DesktopGNB";
import { ReactNode } from "react";
import MobileGNB from "./MobileGNB";
import useLayout from "@/hooks/common/useLayout";

export default function Layout({ children }: { children: ReactNode }) {
  const { isMobile, isPostForm } = useLayout();

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
