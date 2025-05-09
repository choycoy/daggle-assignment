import { NavigateFunction } from "react-router-dom";

export const handleBack = (navigate: NavigateFunction) => {
  if (window.history.length > 2) {
    navigate(-1);
  } else {
    navigate("/");
  }
};

export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return Date.now() >= payload.exp * 1000;
  } catch {
    return true;
  }
}
