import { useEffect } from "react";
import { ERROR_MESSAGES } from "@/constant";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export default function useAuthRedirect(isValidToken: boolean) {
  const navigate = useNavigate();
  const { clearUser, setIsLoggedIn } = useAuthStore();
  useEffect(() => {
    if (!isValidToken) {
      alert(ERROR_MESSAGES.loginRequired);
      navigate("/login", { replace: true });
      clearUser();
      setIsLoggedIn(false);
    }
  }, [isValidToken]);
}
