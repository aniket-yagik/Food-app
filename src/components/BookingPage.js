import React from 'react'
import Navbar from './Navbar'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import BookATable from './BookATable'
import Video from './Video'
import {NavLink} from 'react-router-dom'


function BookingPage() {
  document.title="Booking"
  return (
    <>
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0">
   <Navbar/>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          Booking
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              Booking
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Reservation Start */}
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
       <Video/>
      <BookATable/>
    </div>
  </div>
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Reservation Start */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
 <BacktoTop/>
</>

  )
}

export default BookingPage