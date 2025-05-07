import { useAuthStore } from "@/store/useAuthStore";
import authApis from "@/api/authApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } from "@/constant";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ERROR_MESSAGES } from "@/constant";

export default function useLogin(loginId: string, password: string) {
  const { setIsLoggedIn, setUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

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
      localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    },
    onError: () => alert(ERROR_MESSAGES.loginFailed),
  });
  return { login: mutation.mutate };
}
