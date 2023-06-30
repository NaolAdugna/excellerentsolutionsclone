import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="pageNotFoundContainer">
      <h1>404</h1>
      <h3> Page Not Found </h3> <br />
      <p>The Page you're looking for doesn't seem exist</p>
      <br />
      <button>
        {" "}
        <NavLink to="/">Go Back to Home</NavLink>{" "}
      </button>
    </div>
  );
}
