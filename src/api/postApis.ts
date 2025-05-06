import client from "./client";

const postApis = {
  getPosts: async (pageNum: number, limit: number = 10) => {
    const { data } = await client.get(`/posts?page=${pageNum}&limit=${limit}`);
    return data;
  },
  getPostDetail: async (postId: string | undefined, accessToken: string | null) => {
    const { data } = await client.get(`/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  },
  deletePost: async (postId: string | undefined) => {
    const { data } = await client.delete(`/posts/${postId}`);
    return data;
  },
};
export default postApis;
