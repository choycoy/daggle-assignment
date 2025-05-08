import useAuthErrorHandler from "@/hooks/common/useAuthErrorHandler";
import { useLocation } from "react-router-dom";
import useAuthInit from "@/hooks/common/useAuthInit";
import { useEffect } from "react";
import { useMediaQuery } from "@/hooks/common/useMediaQuery";

export default function useLayout() {
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
  return { isMobile, isPostForm };
}
