import axios, { InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY } from "@/constant";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (token && config.headers) config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

client.interceptors.response.use((res) => res);

export default client;
