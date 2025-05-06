import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import { lazy, Suspense } from "react";
import PublicRoute from "./PublicRoute";

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const PostDetail = lazy(() => import("@/pages/PostDetail"));
const Router = () => {
  return (
    <Layout>
      <Suspense fallback={<div />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default Router;
