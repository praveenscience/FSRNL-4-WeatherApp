import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ dark, children, className }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
      }
    >
      <Link to="/" className="navbar-brand mb-0 h1">
        {children}
      </Link>
    </nav>
  );
};

export default Navbar;
