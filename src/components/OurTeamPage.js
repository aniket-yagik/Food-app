import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BacktoTop from './BacktoTop'
import Team from './Team'
import {NavLink} from 'react-router-dom'

function OurTeamPage() {
  document.title="OurTeam"
  return (
    <>
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0">
    <Navbar/>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          Our Team
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              Team
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Team Start */}
  <Team/>
  {/* Team End */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
<BacktoTop/>
</>

  )
}

export default OurTeamPage