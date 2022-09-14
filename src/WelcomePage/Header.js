import { Outlet, Link } from "react-router-dom";
import React from "react";
const Header = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">Welcome</Link>
        <Link to="/SecondPage">Second Page</Link>
        <Link to="/Planning">Planning Page</Link>
        <Link to="/CongratulationsPage">Congratulations</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
