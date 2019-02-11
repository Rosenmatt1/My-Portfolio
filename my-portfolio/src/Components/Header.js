import React from 'react'
import '../App.css'

const Header = (props) => {
  return (
    <nav>
      {/* div color #3e3e3e; */}
     
      <div className="nav-wrapper grey lighten-5">
        <a href="/#" className="brand-logo right blue-text text-lighten-2">Mateo's </a>
        <ul id="nav-mobile" className="changeToWhite left hide-on-med-and-down ">
          <li><a className="liTextChange blue-text text-lighten-2" href="/">About Me</a></li>
          <li><a className="liTextChange blue-text text-lighten-2" href="/">Components</a></li>
          <li><a className="liTextChange blue-text text-lighten-2" href="/">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

