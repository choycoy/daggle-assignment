import client from "./client";

const commentApis = {
  getComments: async (postId: string | undefined) => {
    const { data } = await client.get(`/posts/${postId}/comments`);
    return data;
  },
  postComment: async (postId: string | undefined, content: string) => {
    const { data } = await client.post(`/posts/${postId}/comments`, { content });
    return data;
  },
  editComment: async (postId: string | undefined, commentId: string, content: string) => {
    const { data } = await client.patch(`/posts/${postId}/comments/${commentId}`, { content });
    return data;
  },
  deleteComment: async (postId: string | undefined, commentId: string) => {
    const { data } = await client.delete(`/posts/${postId}/comments/${commentId}`);
    return data;
  },
};
export default commentApis;
