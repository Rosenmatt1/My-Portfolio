import React from 'react'
import '../App.css'
import github from './github.png'
import linkedin from './linkedin.png'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// dark blue color #3e3e3e
// red color #b61924

const Header = (props) => {
  return (
    <div className="ui menu head">

      <a className="item" onClick={(e) => props.aboutMeButton(e)} href="/">About Mateo</a>
      <a className="item" onClick={(e) => props.projectsButton(e)} href="/">Projects</a>

      {/* <a className="item"> <Link to="/projects/">Projects</Link> </a>
      <a className="item"> <Link to="/aboutme/">About Me</Link> </a> */}
      
      <div className="right menu">
        <img className="github" src={github} alt="MatthewRosenbergGitHub"></img>
        <img className="linkedin" src={linkedin} alt="MatthewRosenbergLinkedIn"></img>
      </div>

    </div>
  )
}

export default Header

