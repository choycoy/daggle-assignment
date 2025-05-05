import useLogin from "@/hooks/auth/useLogin";
import { useState } from "react";
import { ERROR_MESSAGES } from "@/constant";

export default function useLoginLogic() {
  const [input, setInput] = useState({ id: "", pwd: "" });
  const [error, setError] = useState({ idMsg: "", pwdMsg: "" });

  const { id, pwd } = input;
  const { idMsg, pwdMsg } = error;
  const { login } = useLogin(id, pwd);

  const handleLogin = () => {
    if (!id) setError((prev) => ({ ...prev, idMsg: ERROR_MESSAGES.idRequired }));
    if (!pwd) setError((prev) => ({ ...prev, pwdMsg: ERROR_MESSAGES.pwdRequired }));
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
