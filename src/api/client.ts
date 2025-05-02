import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});
client.interceptors.response.use((res) => res);

export default client;
