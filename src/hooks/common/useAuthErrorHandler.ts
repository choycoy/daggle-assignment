import { useEffect } from "react";
import useRefresh from "../auth/useRefresh";
import { STORAGE_KEYS } from "@/constant";

export default function useAuthErrorHandler() {
  const authRefresh = useRefresh();

  useEffect(() => {
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_KEY);
    const handleAuthError = () => authRefresh(refreshToken);
    window.addEventListener("authError", handleAuthError as EventListener);

    return () => {
      window.removeEventListener("authError", handleAuthError as EventListener);
    };
  }, []);
}
