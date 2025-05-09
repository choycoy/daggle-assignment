import axios, { InternalAxiosRequestConfig } from "axios";
import { API_ERRORS, STORAGE_KEYS } from "@/constant";

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

    const isTokenErr = status === 401 && message === API_ERRORS.INVALID_OR_EXPIRED_TOKEN;

    if (isTokenErr && !isAuthErrorHandled) {
      isAuthErrorHandled = true;
      const event = new CustomEvent("authError", { detail: error });
      window.dispatchEvent(event);

      setTimeout(() => (isAuthErrorHandled = false), 3000);
    }

    return Promise.reject(error);
  },
);

export default client;
