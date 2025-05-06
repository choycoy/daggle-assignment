import client from "./client";

const commentApis = {
  getComments: async (postId: string | undefined, accessToken: string | null) => {
    const { data } = await client.get(`/posts/${postId}/comments`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  },
  postComment: async (postId: string | undefined, accessToken: string | null, content: string) => {
    const { data } = await client.post(
      `/posts/${postId}/comments`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return data;
  },
  editComment: async (postId: string | undefined, accessToken: string | null, commentId: string, content: string) => {
    const { data } = await client.patch(
      `/posts/${postId}/comments/${commentId}`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return data;
  },
  deleteComment: async (postId: string | undefined, accessToken: string | null, commentId: string) => {
    const { data } = await client.delete(`/posts/${postId}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  },
};
export default commentApis;
