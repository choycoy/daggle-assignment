import { NavigateFunction } from "react-router-dom";

export const handleBack = (navigate: NavigateFunction) => {
  if (window.history.length > 2) {
    navigate(-1);
  } else {
    navigate("/");
  }
};
