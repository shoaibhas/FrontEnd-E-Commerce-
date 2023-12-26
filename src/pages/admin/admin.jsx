import React from "react";
import GetAllAdmin from "../../modules/Auth/Auth";
import PostAdmin from "../../modules/Auth/PostAdmin";
// import Header1 from "../../components/Header1";
const AdminPage = () => {
  return (
    <>
      <GetAllAdmin />
    <PostAdmin/>
      {/* <Header1/> */}
      {/* <Outlet /> */}
    </>
  );
};

export default AdminPage;
