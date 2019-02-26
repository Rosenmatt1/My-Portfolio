import React from 'react'
import '../App.css'
import github from './github.png'
import linkedin from './linkedin.png'

// dark blue color #3e3e3e
// red color #b61924

const Header = (props) => {
  return (
    <div className="ui menu">

      <a className="item head" href="/">About Mateo</a>
      <a className="item head" href="/">Projects</a>

      <div className=" right menu">
        <img className="github" src={github}></img>
        <img className="linkedin" src={linkedin}></img>
      </div>

    </div>
  )
}

export default Header

