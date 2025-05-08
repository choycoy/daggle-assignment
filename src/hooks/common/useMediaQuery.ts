import { useEffect } from "react";
import { useMediaQueryStore } from "@/store/useMediaQueryStore";

export const useMediaQuery = () => {
  const { setIsMobile } = useMediaQueryStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 641);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return useMediaQueryStore((state) => state.isMobile);
};
