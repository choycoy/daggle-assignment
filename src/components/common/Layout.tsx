import DesktopGNB from "./DesktopGNB";
import { ReactNode } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MobileGNB from "./MobileGNB";

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 641px)");

  return (
    <div className="min-h-screen w-full">
      {isMobile ? <MobileGNB /> : <DesktopGNB />}
      <main className="tab:bg-gray-01 desktop:px-[120px] tab:pt-[186px] tab:pb-[100px] tab:px-[30px] w-full pt-14">
        {children}
      </main>
    </div>
  );
}
