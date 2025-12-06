import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Shared/Navbar/Navbar";

const HomeLayouts = () => {
  return (
    <div className="min-h-screen bg-[#f9f5f6]">
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayouts;
