import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="welcome">
          <h1>Colonel's Social Circle</h1>
          <h3>The Finger Lickin' Good Secret Social Society</h3>
        </div>
        <br /><br /><br />
        <div className="circle-logo">
          <a href="./login">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png"
              alt="KFC logo"
              className="kfc-logo"
              style={{
                width: 400,
                height: 400,
                borderRadius: 400 / 2,
                cursor: "pointer",
              }}
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
