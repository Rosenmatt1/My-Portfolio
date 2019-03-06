import React from 'react'
import '../App.css'

// dark blue color #3e3e3e
// red color #b61924

const Footer = (props) => {
  return (
    <div>
      <div className="footerBuffer"></div>
      <div className="footer ui one column stackable center aligned page grid">
        <i class="download icon"></i>
        <div className="footAlign column twelve wide">
          <h5>Contact:</h5>
          <p> Phone: 617-719-3300 </p>
          <p> Email: Rosenmatt1@gmail.com </p>
        </div>
      </div>
    </div>
  )
}



export default Footer








