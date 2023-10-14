import React from 'react'

function Video() {
  return (
    <>
          <div className="col-md-6">
        <div className="video">
          <button
            type="button"
            className="btn-play"
            data-bs-toggle="modal"
            data-src="/https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-bs-target="#videoModal"
          >
            <span />
          </button>
        </div>
      </div>
    </>
  )
}

export default Video