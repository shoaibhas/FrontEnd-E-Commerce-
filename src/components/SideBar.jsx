import React from "react";
import { NavLink } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
};

export default TopBar;

