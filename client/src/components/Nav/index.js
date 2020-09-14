import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" type="button" href="/">
        My Bookshelf
      </a>
   <ul className="navbar-nav">
   <li className="nav-item">
      <a className="nav-link navbar-brand" type="button" id="home" href="/">Search</a>
    </li>
    <li className="nav-item">
      <a className="nav-link navbar-brand" type="button" id="shelf" href="/shelf">Your Bookshelf</a>
    </li>
  </ul> 
  </nav>
  );
}

export default Nav;
