import React, { Component } from "react";
import "../css/NotFound.css";
import Background_404 from "../img/404_page.jpg";

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="container-404">
          <div className="items-404">
            <img className="img-404" src={Background_404} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;