import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-white shadow-md py-3">
      <nav className="container flex  justify-between  ">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="nav__items flex gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
