import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import BacktoTop from './BacktoTop'
import {NavLink} from 'react-router-dom'

function ServicePage() {
  document.title="Services"
  return (
    <>
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0">
    <Navbar/>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          Services
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              Service
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <Services/>
  </div>
  {/* Service End */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <BacktoTop/>
</>

  )
}

export default ServicePage