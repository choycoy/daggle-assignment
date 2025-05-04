import client from "./client";

const homeApis = {
  getPosts: async (pageNum: number, limit: number = 10) => {
    const { data } = await client.get(`/posts?page=${pageNum}&limit=${limit}`);
    return data;
  },
};
export default homeApis;
