import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Router = () => {
  return (
    <Layout>
      <Suspense fallback={<div />}>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default Router;
