import client from "./client";

const authApis = {
  refresh: async (refreshToken: string | null) => await client.post(`/auth/refresh`, { refreshToken: refreshToken }),
  logout: async (refreshToken: string | null) => await client.post(`/auth/logout`, { refreshToken: refreshToken }),
  login: async (loginId: string, password: string) => {
    const { data } = await client.post(`/auth/login`, { loginId: loginId, password: password });
    return data;
  },
};

export default authApis;
