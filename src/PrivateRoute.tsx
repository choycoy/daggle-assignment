import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" && location.search === "";
  const cameFromOtherPage = location.state?.from || new URLSearchParams(location.search).get("from");

  if (isLoggedIn && isLoginPage && !cameFromOtherPage) return <Navigate to="/" replace />;

  return <Outlet />;
}
