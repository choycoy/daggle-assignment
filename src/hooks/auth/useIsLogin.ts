import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constant";
import { useMutation } from "@tanstack/react-query";
import authApis from "@/api/authApis";

export default function useIsLogin() {
  const { setIsLoggedIn, clearUser } = useAuthStore();

  const { mutate: refreshAuth } = useMutation({
    mutationFn: async (refreshToken: string) => await authApis.refresh(refreshToken),
    onSuccess: () => setIsLoggedIn(true),
  });

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (accessToken) setIsLoggedIn(true);
    else if (refreshToken) {
      refreshAuth(refreshToken);
    } else {
      clearUser();
      setIsLoggedIn(false);
    }
  });
}
