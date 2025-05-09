export const STORAGE_KEYS = {
  ACCESS_TOKEN_KEY: "access_token",
  REFRESH_TOKEN_KEY: "refresh_token",
  USER_ID_KEY: "user_id",
};

export const API_ERRORS = {
  INVALID_OR_EXPIRED_TOKEN: "Invalid or Expired Token",
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
  LOGOUT: "로그아웃 하시겠어요?",
  DELETE_POST: "게시글을 삭제할까요?",
  TITLE_LENGTH_ERROR: "최소 1자 이상 입력해주세요.",
  CONTENT_LENGTH_ERROR: "최소 5자 이상 입력해주세요.",
};

export const CAROUSEL_DATA = [
  {
    id: 0,
    title: "프린티",
    subtitle: "주식회사 프린티",
    description: "작가와 팬을 잇는 일러스트 출력 플랫폼",
  },
  {
    id: 1,
    title: "G-Alpha",
    subtitle: "(주)씨에이허브",
    description: "물류 관계자 비교견적 솔루션",
  },
  {
    id: 2,
    title: "KOSTA-EDU",
    subtitle: "한국소프트웨어 기술진흥협회",
    description: "학습관리 시스템",
  },
  {
    id: 3,
    title: "달콤 수학",
    subtitle: "달콤 교육",
    description: "엄마표 온라인 수학교육 강의 플랫폼",
  },
];
