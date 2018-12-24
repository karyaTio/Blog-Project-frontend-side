import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand" href="#">
          Tio Saputra
        </div>
        <div className="navbar-navigation">
          <ul>
            <li>
              <a className="active" href="blog">
                Blog
              </a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
