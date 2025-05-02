import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Router = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div />}>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default Router;
