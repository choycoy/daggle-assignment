import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";
import { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? <Navigate to="/" replace /> : children;
}
