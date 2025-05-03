import Header from "./Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="bg-gray-01 w-full px-[120px] pt-[186px] pb-[100px]">{children}</main>
    </div>
  );
}
