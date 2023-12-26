import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/error/Error";
import AdminPage from "../pages/admin/admin";
import AdminLayout from "../layout/AdminLayout";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Route>
        <Route path="*" element={<Error />} />
        {/* <Route path="/register" element={<About/>}></Route> */}
      </Routes>
    </>
  );
};

export default AppRouter;
