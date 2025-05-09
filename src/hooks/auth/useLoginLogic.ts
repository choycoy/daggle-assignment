import useLogin from "@/hooks/auth/useLogin";
import { useState, useEffect } from "react";
import { UI_ERRORS } from "@/constant";
import { useLocation } from "react-router-dom";

export default function useLoginLogic() {
  const [input, setInput] = useState({ id: "", pwd: "" });
  const [error, setError] = useState({ idMsg: "", pwdMsg: "" });
  const location = useLocation();
  const hasAlert = location.state?.alert;

  useEffect(() => {
    if (hasAlert) {
      alert(UI_ERRORS.LOGIN_REQUIRED);
    }
  }, [hasAlert]);

  const { id, pwd } = input;
  const { idMsg, pwdMsg } = error;
  const { login } = useLogin(id, pwd);

  const handleLogin = () => {
    if (!id) setError((prev) => ({ ...prev, idMsg: UI_ERRORS.ID_REQUIRED }));
    if (!pwd) setError((prev) => ({ ...prev, pwdMsg: UI_ERRORS.PWD_REQUIRED }));
    if (id && pwd) login();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && id && pwd) handleLogin();
  };
  return {
    id,
    pwd,
    setInput,
    error,
    setError,
    idMsg,
    pwdMsg,
    handleKeyDown,
    handleLogin,
  };
}
