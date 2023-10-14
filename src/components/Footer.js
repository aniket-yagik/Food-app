import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
         <div
    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Company
          </h4>
          <NavLink className="btn btn-link" to="/about">
            About Us
          </NavLink>
          <NavLink className="btn btn-link" to="/contact">
            Contact Us
          </NavLink>
          <NavLink className="btn btn-link" to="/menu">
            Menu
          </NavLink>
          <NavLink className="btn btn-link" to="/booking">
           Booking
          </NavLink>
          <NavLink className="btn btn-link" to="/ourteam">
             Our &amp; Team
          </NavLink>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Contact
          </h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
             Sector 15 , Lucknow , India
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            food@restoran.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social"  target='_blank' href="https://twitter.com/login?lang=en">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light btn-social"  target='_blank'  href="https://www.facebook.com/">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light btn-social"  target='_blank' href="https://www.youtube.com/">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-outline-light btn-social" target='_blank' href="https://in.linkedin.com/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Opening
          </h4>
          <h5 className="text-light fw-normal">Monday - Saturday</h5>
          <p>09AM - 09PM</p>
          <h5 className="text-light fw-normal">Sunday</h5>
          <p>10AM - 08PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          quotes  
          </h4>
          <p>|| good food, good mood. ||</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control border-primary w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="/">
             Food Restoran 
            </a>
            , 2023 |
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              |  All Right Reserved. Designed By HTML Codex. 
            <a className="border-bottom" href="https://htmlcodex.com">
            </a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="">Help</NavLink>
              <NavLink href="">FQAs</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Footer