import { useAuthStore } from "@/store/useAuthStore";
import authApis from "@/api/authApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { STORAGE_KEYS } from "@/constant";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UI_ERRORS } from "@/constant";

export default function useLogin(loginId: string, password: string) {
  const { setIsLoggedIn, setUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const queryParams = new URLSearchParams(location.search);
  const fromQuery = queryParams.get("from");
  const fromState = location.state?.from;
  const redirectTo = fromQuery || fromState || "/";

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await authApis.login(loginId, password);
      return response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      const { user, tokens } = data;
      setIsLoggedIn(true);
      setUser(user);
      const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_ID_KEY } = STORAGE_KEYS;
      localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
      localStorage.setItem(USER_ID_KEY, user.id);
      navigate(redirectTo, { replace: true });
    },
    onError: () => alert(UI_ERRORS.LOGIN_FAILED),
  });
  return { login: mutation.mutate };
}
