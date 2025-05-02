// auth
export interface User {
  loginId: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  id: string;
  nickname: string;
}

export interface tokens {
  accessToken: string;
  refreshToken: string;
}

export interface authResponse extends tokens, User {}
