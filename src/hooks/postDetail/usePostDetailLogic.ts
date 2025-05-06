import { ERROR_MESSAGES } from "@/constant";
import { useParams } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "@/constant";
import { isTokenExpired } from "@/utils/commonUtils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export default function usePostDetailLogic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clearUser, setIsLoggedIn } = useAuthStore();
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const isValidToken = !!accessToken && !isTokenExpired(accessToken);

  useEffect(() => {
    if (!isValidToken) {
      alert(ERROR_MESSAGES.loginRequired);
      navigate("/login", { replace: true });
      clearUser();
      setIsLoggedIn(false);
    }
  }, [isValidToken]);

  return { postId: id, accessToken };
}
