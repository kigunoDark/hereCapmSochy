import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <h1 className="header center white-text text-lighten-2">
                CheckOut
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  A modern interactive map, which chane you life in two clicks
                </h5>
              </div>
              <div className="row center">
                <a
                  href="#"
                  id="download-button"
                  className="btn-large waves-effect waves-light blue lighten-1"
                >
                  Get Started
                  <i className="material-icons left ">person_pin_circle </i>
                </a>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src="../img/header.jpg" />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
