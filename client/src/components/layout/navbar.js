import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-fixed">
          <nav className="blue">
            <div className="nav-wrapper container">
              <a href="#" className="brand-logo">
                CheckOut
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#"> Login </a>
                </li>
                <li>
                  <a href="#"> Register </a>
                </li>
              </ul>
              <ul id="nav-mobile" class="sidenav">
                <li>
                  <a href="#"> Login </a>
                </li>
                <li>
                  <a href="#"> Register </a>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" class="sidenav-trigger">
                <i class="material-icons">menu</i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
