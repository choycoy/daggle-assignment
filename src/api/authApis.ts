import client from "./client";

const authApis = {
  refresh: async (refreshToken: string) => await client.post(`/auth/refresh`, { refreshToken: refreshToken }),
};

export default authApis;
