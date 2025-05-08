import { useEffect } from "react";
import { STORAGE_KEYS } from "@/constant";
import { useAuthStore } from "@/store/useAuthStore";
import { isTokenExpired } from "@/utils/commonUtils";
import useRefresh from "../auth/useRefresh";

export default function useAuthInit() {
  const { setIsLoggedIn, clearUser } = useAuthStore();
  const refreshAuth = useRefresh();
  const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = STORAGE_KEYS;

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (accessToken && !isTokenExpired(accessToken)) setIsLoggedIn(true);
    else if (refreshToken) {
      refreshAuth(refreshToken);
    } else {
      clearUser();
      setIsLoggedIn(false);
    }
  }, []);
}
