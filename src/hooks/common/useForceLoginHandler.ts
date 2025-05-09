import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useForceLoginHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ from: string }>;
      navigate("/login", {
        replace: true,
        state: { from: customEvent.detail.from, hasAlert: true },
      });
    };

    window.addEventListener("forceLogin", handler);
    return () => {
      window.removeEventListener("forceLogin", handler);
    };
  }, [navigate]);
}
