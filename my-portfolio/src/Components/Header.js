import React from 'react'
import '../App.css'

const Header = (props) => {
  return (
    <nav>
     
      <div className="nav-wrapper grey lighten-5 ">
        <a href="/#" className="brand-logo right ">Mateo's </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down ">
          <li><a className=" blue-text text-lighten-2" href="/">About Me</a></li>
          <li><a className=" blue-text text-lighten-2" href="/">Components</a></li>
          <li><a className=" blue-text text-lighten-2" href="/">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

