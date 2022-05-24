import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/NotFound.css";
import Bar from "../Navbar/Bar";

function NotFound() {
  return (
    <div className="bg">
      <Bar />
      <div className="container down">
        <div className="text-center ">
          <p>Oops!</p>
          <h2>404 Page not Found</h2>
          <br />
          <Link to="/">
            <button className="btn btn-success btn-lg">
              <FaHome />
              GO TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
