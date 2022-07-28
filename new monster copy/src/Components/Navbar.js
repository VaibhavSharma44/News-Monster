import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News Monster</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="/">General</Link></li>
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/Science">Science</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/Health">Health</Link></li>
            <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
