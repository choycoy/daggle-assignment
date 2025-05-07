import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import authApis from "@/api/authApis";
import { useNavigate } from "react-router-dom";
import { isTokenExpired } from "@/utils/commonUtils";
import { ERROR_MESSAGES } from "@/constant";

export default function useIsLogin() {
  const { setIsLoggedIn, clearUser } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: refreshAuth } = useMutation({
    mutationFn: async (refreshToken: string) => await authApis.refresh(refreshToken),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setIsLoggedIn(true);
    },
    onError: () => {
      alert(ERROR_MESSAGES.refreshRequired);
      navigate("/login", { replace: true });
      clearUser();
      setIsLoggedIn(false);
    },
  });

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
