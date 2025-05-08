import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UI_ERRORS } from "./constant";

export default function PrivateRoute() {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" && location.search === "";
  const cameFromOtherPage = location.state?.from || new URLSearchParams(location.search).get("from");

  if (!isLoggedIn && !isLoginPage && !cameFromOtherPage) {
    alert(UI_ERRORS.loginRequired);
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  if (isLoggedIn && isLoginPage && !cameFromOtherPage) return <Navigate to="/" replace />;

  return <Outlet />;
}
