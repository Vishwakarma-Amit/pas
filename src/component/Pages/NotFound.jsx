import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/NotFound.css'


function NotFound() {
  return (
        <div className="container down">
            <div className="text-center ">
                <p>Oops!</p>
                <h2>
                404 Page not Found
                </h2>
                <br />
                <Link to='/' className="btn btn-secondary btn-lg">
                  <button>
                  <FaHome />
                  GO TO HOMEPAGE
                  </button>
                </Link>
            </div>
        </div>
      
    )
}

export default NotFound