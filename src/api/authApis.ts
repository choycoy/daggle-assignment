import client from "./client";

const authApis = {
  refresh: async (refreshToken: string) => await client.post(`/auth/refresh`, { refreshToken: refreshToken }),
  logout: async (refreshToken: string | null) => await client.post(`/auth/logout`, { refreshToken: refreshToken }),
};

export default authApis;
