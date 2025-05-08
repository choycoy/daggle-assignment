export const STORAGE_KEYS = {
  ACCESS_TOKEN_KEY: "access_token",
  REFRESH_TOKEN_KEY: "refresh_token",
  USER_ID_KEY: "user_id",
};

export const QUERY_KEYS = {
  GET_POSTS: "getPosts",
  GET_INFINITE_POSTS: "getInfinitePosts",
  GET_POST: "getPost",
  GET_COMMENTS: "getComments",
};

export const MENU_LIST = [
  { id: 0, item: "로그인", path: "/login" },
  { id: 1, item: "커뮤니티", path: "/" },
];

export const UI_ERRORS = {
  ID_REQUIRED: "아이디를 입력해주세요.",
  PWD_REQUIRED: "비밀번호를 입력해주세요.",
  LOGIN_FAILED: "로그인에 실패했어요.\n아이디 또는 비밀번호를 다시 확인해주세요.",
  LOGIN_REQUIRED: "로그인 후 이용하실 수 있어요.",
  REFRESH_REQUIRED: "로그인 세션이 만료되었어요. 다시 로그인해 주세요.",
  DELETE_FORBIDDEN_MSG: "댓글 작성자만 삭제할 수 있어요.",
  EDIT_FORBIDDEN_MSG: "댓글 작성자만 수정할 수 있어요.",
  LOGOUT: "로그아웃 하시겠어요?",
  DELETE_POST: "게시글을 삭제할까요?",
  TITLE_LENGTH_ERROR: "최소 1자 이상 입력해주세요.",
  CONTENT_LENGTH_ERROR: "최소 5자 이상 입력해주세요.",
};

export const API_ERRORS = {
  INVALID_OR_EXPIRED_TOKEN: "Invalid or Expired Token",
  LOGIN_REQUIRED: "Login Required",
};
