import React from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="flex  justify-start items-center p-5 shadow-lg">
      {/* Logo */}
      <nav className="w-24 lg:w-36 lg:pl-5">
        <img
          className="w-full h-full object-cover object-center"
          src={logo}
          alt="Logo"
        />
      </nav>

      {/* Navmenu */}
    </header>
  );
}

export default Navbar;
