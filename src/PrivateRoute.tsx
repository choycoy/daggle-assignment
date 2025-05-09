import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UI_ERRORS } from "./constant";
import { useRef } from "react";

export default function PrivateRoute() {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isHomePage = location.pathname === "/";
  const isPublicPage = isLoginPage || isHomePage;
  const isRedirected = location.state?.from || new URLSearchParams(location.search).get("from");
  const hasShownAlert = useRef(false);

  if (!isLoggedIn && !isPublicPage && !isRedirected) {
    if (!hasShownAlert.current) {
      alert(UI_ERRORS.LOGIN_REQUIRED);
      hasShownAlert.current = true;
    }
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  if (isLoggedIn && isLoginPage && !isRedirected) return <Navigate to="/" replace />;

  return <Outlet />;
}
