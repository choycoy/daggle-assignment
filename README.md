# 다글제작소 프론트엔드 실무 과제
해당 프로젝트는 다글제작소 프론트엔드 개발자 채용 과제의 일환으로 제작되었습니다. 과제 요구사항에 따라 게시판 형태의 SPA를 구현하였으며, 퍼블리싱부터 라우팅, 게시글 CRUD 처리까지 포함하고 있습니다.

배포된 결과물은 해당 링크에서 확인하실 수 있습니다:
👉 https://daggle-assignment.vercel.app/

## 🛠 사용 기술
- **React**
- **React Router DOM**
- **TailwindCSS**
- **Axios**
- **Vite** 
- **zustand**
- **@tanstack/react-query**
 - **@react-hook/media-query**: 반응형 대응을 위한 미디어 쿼리 훅
- **dayjs**: 날짜 포맷 처리
- **ESLint / Prettier**
- **Vercel**

## 📁 폴더 구조
```
├── src/
│   ├── api/
│   ├── assets/
│   │   └── fonts/
│   │   └── icons/
│   │   └── imgs/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── postDetail/
│   ├── hooks/
│   │   ├── auth/
│   │   ├── common/
│   │   ├── home/
│   │   ├── postDetail/
│   │   └── postForm/
│   ├── pages/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── 기타 설정 파일들 (vite.config.ts, package.json 등)
```

## 🚧 미구현 사항 및 전달사항
- 모바일 환경에서는 브라우저의 `confirm()` 메서드가 정상 동작하지 않아, 게시글 삭제 시 새로고침 이후에야 확인창이 뜨는 문제가 있습니다.
- 과제 요구사항에 따라 로그인 여부에 따라 댓글 작성 버튼의 상태를 제어해야 했습니다. 하지만 게시글 상세 API가 인증 토큰 없이는 접근할 수 없는 구조로 되어 있어, 비로그인 상태에서 게시글 상세 페이지 접근 시 **"로그인 후 이용하실 수 있어요."** 라는 안내 모달을 먼저 노출하도록 처리하였습니다.
- 데스크톱 GNB에는 로그아웃 기능이 포함되어야 하나, 제공된 Figma 디자인에는 해당 요소가 포함되어 있지 않았습니다. 이에 따라 로그아웃 버튼은 모바일 환경에서만 접근 가능하도록 구현하였습니다.
 
