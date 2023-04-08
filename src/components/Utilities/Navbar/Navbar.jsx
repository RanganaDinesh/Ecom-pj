// import { useState, useRef } from "react";
import React from "react";
import "./Navbar.css";
import { Outlet, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <header className="logo">
          {/* <div className="item blue"></div> */}
          <span className="title">iSHOP</span>
        </header>
        <ul className="list">
          <li>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/iPhone">
              iPhone
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/iPad">
              iPad
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Macbook">
              Macbook
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />

      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
