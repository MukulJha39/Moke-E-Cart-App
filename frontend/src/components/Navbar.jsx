import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart.jsx";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand">Vibe Mock Cart</a>
      </div>
    </nav>
  );
}
