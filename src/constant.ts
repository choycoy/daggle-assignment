export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const QUERY_KEYS = {
  getPosts: "getPosts",
  getInfinitePosts: "getInfinitePosts",
  getPost: "getPost",
  getComments: "getComments",
};
export const MENU_LIST = [
  { id: 0, item: "로그인", path: "/login" },
  { id: 1, item: "커뮤니티", path: "/" },
];
export const ERROR_MESSAGES = {
  idRequired: "아이디를 입력해주세요.",
  pwdRequired: "비밀번호를 입력해주세요.",
  loginFailed: "로그인에 실패했어요.\n아이디 또는 비밀번호를 다시 확인해주세요.",
  loginRequired: "로그인 후 이용하실 수 있어요",
  refreshRequired: "로그인 세션이 만료되었어요. 다시 로그인해 주세요.",
  deleteForbiddenMsg: "댓글 작성자만 삭제할 수 있어요.",
  editForbiddenMsg: "댓글 작성자만 수정할 수 있어요.",
  logout: "로그아웃 하시겠어요?",
  deletePost: "게시글을 삭제할까요?",
  titleLengthError: "최소 1자 이상 입력해주세요.",
  contentLengthError: "최소 5자 이상 입력해주세요.",
};
