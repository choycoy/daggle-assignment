import { useMutation } from "@tanstack/react-query";
import authApis from "@/api/authApis";
import { useAuthStore } from "@/store/useAuthStore";
import { STORAGE_KEYS } from "@/constant";

export default function useLogout() {
  const { setIsLoggedIn, clearUser } = useAuthStore();
  const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = STORAGE_KEYS;
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  const mutation = useMutation({
    mutationFn: async () => await authApis.logout(refreshToken),
    onSuccess: () => {
      setIsLoggedIn(false);
      clearUser();
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
  });
  return { logout: mutation.mutate };
}
