import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <NavLink to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3" />
          Restoran
        </h1>
        {/* <img src="/static/img/logo.png" alt="Logo"> */}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <NavLink to="/" className="nav-item nav-link active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Service
          </NavLink>
          <NavLink to="/menu" className="nav-item nav-link">
            Menu
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <NavLink to="/booking" className="dropdown-item">
                Booking
              </NavLink>
              <NavLink to="/ourteam" className="dropdown-item">
                Our Team
              </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
        <NavLink to="/booking" className="btn btn-primary py-2 px-4">
          Book A Table
        </NavLink>
      </div>
    </nav>
    </>
  )
}

export default Navbar