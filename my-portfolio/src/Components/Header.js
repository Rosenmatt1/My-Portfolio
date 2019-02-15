import React from 'react'
import '../App.css'

// dark blue color #3e3e3e
// red color #b61924

const Header = (props) => {
  return (
    <div className="ui right menu">
      <a className="item" href="/">About Mateo</a>
      <a className="item" href="/">Projects</a>
    </div>
  )
}

export default Header

