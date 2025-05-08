import { useMutation, useQueryClient } from "@tanstack/react-query";
import authApis from "@/api/authApis";
import { UI_ERRORS } from "@/constant";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function useRefresh() {
  const queryClient = useQueryClient();
  const { setIsLoggedIn, clearUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isPublicPage = location.pathname === "/" || location.pathname === "/login";

  const { mutate: refreshAuth } = useMutation({
    mutationFn: async (refreshToken: string | null) => await authApis.refresh(refreshToken),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setIsLoggedIn(true);
    },
    onError: () => {
      if (!isPublicPage) {
        alert(UI_ERRORS.REFRESH_REQUIRED);
        setTimeout(() => {
          navigate("/login", { replace: true, state: { from: location.pathname } });
        }, 100);
      }
      clearUser();
      setIsLoggedIn(false);
    },
  });
  return refreshAuth;
}
