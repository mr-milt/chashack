import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Rootlayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
