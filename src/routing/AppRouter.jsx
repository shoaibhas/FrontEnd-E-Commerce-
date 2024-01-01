import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/error/Error";
import AdminLayout from "../layout/AdminLayout";
// import LoginPage from "../modules/Auth/pages/login";
// import Home from "../pages/home/home";
// import CreateAdmin from "../modules/Auth/component/CreateAdmin";
// import CreateAdminPage from "../modules/Admin/page/create";
// import AuthLayout from "../modules/Auth/layout/AuthLayout";
import CreateAdminPage from "../modules/Admin/page/create";
// import CreateAdmin from "../modules/Auth/component/CreateAdmin";
import GetAllAdmin from "../modules/Admin/page";
// import Home from "../pages/home/home";
import About from "../pages/About/About";
import Category from "../pages/Category/Category";
import UpdateAdminPage from "../modules/Admin/page/update";
// import AuthPage from "../pages/auth/auth";
import Home from "../pages/home/home";
import AuthPage from "../pages/auth/auth";
import CreateAdmin from "../modules/Auth/component/CreateAdmin";
import AdminPage from "../pages/admin/admin";
// import DeleteAdmin from "../modules/Admin/page/Delete";
// import AuthPage from "../pages/auth/auth";
// import LoginPage from "../modules/Auth/pages/login";
const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}

        <Route path="/" element={<AdminLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<AuthPage />}></Route>
          <Route path="/login/dashboard" element={<AdminPage />}></Route>
          <Route path="/login/create" element={<CreateAdminPage />}></Route>
          <Route path="/login/show" element={<GetAllAdmin />}></Route>
          <Route path="/login/register/:admin_id/update" element={<UpdateAdminPage />}></Route>
          {/* <Route path="/login/register/:admin_id/delete" element={<DeleteAdmin />}></Route> */}
          <Route path="/about" element={<CreateAdmin />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Route>
        <Route path="*" element={<Error />} />

      </Routes>
    </>
  );
};

export default AppRouter;
