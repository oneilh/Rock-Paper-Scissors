import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <main className="layout">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
