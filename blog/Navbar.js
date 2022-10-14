import React from "react";

const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#work">SYNTAX</a>
          </li>
          <li>
            <a href="#clients">COMMENTS</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;