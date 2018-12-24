import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand" href="#">
        Tio Saputra
      </div>
      <div className="navbar-navigation">
        <ul>
          <li>
            <Link to="/" className="active">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
