import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import { lazy, Suspense } from "react";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const PostDetail = lazy(() => import("@/pages/PostDetail"));
const PostForm = lazy(() => import("@/pages/PostForm"));

const Router = () => {
  return (
    <Layout>
      <Suspense fallback={<div />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/write" element={<PostForm />} />

          <Route element={<PrivateRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default Router;
