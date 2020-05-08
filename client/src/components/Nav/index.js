import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
   <ul className="navbar-nav">
   <li className="nav-item">
      <a className="nav-link navbar-brand" id="home" href="/">Search</a>
    </li>
    <li className="nav-item">
      <a className="nav-link navbar-brand" id="shelf" href="/shelf">Your Bookshelf</a>
    </li>
  </ul> 
  </nav>
  );
}

export default Nav;
