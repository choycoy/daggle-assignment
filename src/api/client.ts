import axios, { InternalAxiosRequestConfig } from "axios";
import { STORAGE_KEYS, UI_ERRORS, API_ERRORS } from "@/constant";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_KEY);

  if (token && config.headers) config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

let isAuthErrorHandled = false;

client.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (!isAuthErrorHandled) {
      const isTokenErr = status === 401 && message === API_ERRORS.INVALID_OR_EXPIRED_TOKEN;
      const isReLogin =
        (status === 401 && message === API_ERRORS.LOGIN_REQUIRED) ||
        (status === 404 && message === API_ERRORS.REFRESH_TOKEN_NOT_FOUND);

      if (isTokenErr) {
        isAuthErrorHandled = true;
        const event = new CustomEvent("authError", { detail: error });
        window.dispatchEvent(event);
      }

      if (isReLogin) {
        isAuthErrorHandled = true;
        localStorage.clear();
        alert(UI_ERRORS.LOGIN_REQUIRED);
        const from = window.location.pathname;
        window.location.href = `/login?from=${encodeURIComponent(from)}`;
      }

      if (isTokenErr || isReLogin) {
        setTimeout(() => {
          isAuthErrorHandled = false;
        }, 3000);
      }
    }

    return Promise.reject(error);
  },
);

export default client;
