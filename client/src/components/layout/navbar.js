import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            CheckOut
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="badges.html">Login</a>
            </li>
            <li>
              <a href="collapsible.html">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
