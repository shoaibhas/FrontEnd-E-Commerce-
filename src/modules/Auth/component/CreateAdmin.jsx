import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const CreateAdmin = () => {
  return (
    <header>
      <nav>
        <ul>
          {/* <li>
            <NavLink to="/">Home</NavLink>
          </li> */}
          <li>
            <NavLink to="/login/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/login/show">Show</NavLink>
          </li>
          {/* <li>
            <NavLink to="/login/:admin_id/update">update</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
    
  );
};

export default CreateAdmin;
