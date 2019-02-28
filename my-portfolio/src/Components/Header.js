import React from 'react'
import '../App.css'
import github from './github.png'
import linkedin from './linkedin.png'

// dark blue color #3e3e3e
// red color #b61924

const Header = (props) => {
  return (
    <div className="ui menu head">

      <a className="item" href="/">About Mateo</a>
      <a className="item" href="/">Projects</a>

      <div className="right menu">
        <img className="github" src={github} alt="MatthewRosenbergGitHub"></img>
        <img className="linkedin" src={linkedin} alt="MatthewRosenbergLinkedIn"></img>
      </div>

    </div>
  )
}

export default Header

