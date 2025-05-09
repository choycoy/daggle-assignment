import { useMutation, useQueryClient } from "@tanstack/react-query";
import authApis from "@/api/authApis";
import { useAuthStore } from "@/store/useAuthStore";

export default function useRefresh() {
  const queryClient = useQueryClient();
  const { setIsLoggedIn, clearUser } = useAuthStore();

  const { mutate: refreshAuth } = useMutation({
    mutationFn: async (refreshToken: string | null) => await authApis.refresh(refreshToken),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setIsLoggedIn(true);
    },
    onError: () => {
      clearUser();
      setIsLoggedIn(false);
      localStorage.clear();
    },
  });
  return refreshAuth;
}
