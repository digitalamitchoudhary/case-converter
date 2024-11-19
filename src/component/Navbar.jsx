import React from 'react';
import PropTypes from "prop-types";
import { Link,   } from "react-router-dom"; // Import Link from react-router-dom // Import useLocation


export default function Navbar(props) {

 
  

 













  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
       
        <Link className="navbar-brand" to="/case-converter">
          {props.title}
        </Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" onClick={props.toggleMode}
          />
          <label
            className="form-check-label "
            htmlFor="flexSwitchCheckDefault "
          >
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
// Navbar.defaultProps = {
//   title: 'Set a Title here',
//   aboutText : 'About text'
// };
