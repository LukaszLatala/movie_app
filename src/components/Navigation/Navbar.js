import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ fav }) => {
  return (
    <ul className="navbar">
      <li>
        <Link className="link" to="/">
          {" "}
          Home{" "}
        </Link>
      </li>
      <li>
        <Link className="link" to="/favorite">
          {" "}
          Favorite films ({fav.length})
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
