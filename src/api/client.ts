import axios, { InternalAxiosRequestConfig } from "axios";
import { STORAGE_KEYS } from "@/constant";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_KEY);

  if (token && config.headers) config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

export default client;
