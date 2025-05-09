import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UI_ERRORS, SESSION_KEYS } from "./constant";

export default function PrivateRoute() {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isHomePage = location.pathname === "/";
  const isPublicPage = isLoginPage || isHomePage;
  const isRedirected = location.state?.from || new URLSearchParams(location.search).get("from");

  if (!isLoggedIn && !isPublicPage && !isRedirected) {
    const alertShown = sessionStorage.getItem(SESSION_KEYS.LOGIN_ALERT_SHOWN);
    if (!alertShown) {
      alert(UI_ERRORS.LOGIN_REQUIRED);
      sessionStorage.setItem(SESSION_KEYS.LOGIN_ALERT_SHOWN, "true");
    }
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  if (isLoggedIn && isLoginPage && !isRedirected) return <Navigate to="/" replace />;

  return <Outlet />;
}
