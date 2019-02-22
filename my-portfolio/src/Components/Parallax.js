import React from 'react'
import '../App.css'
import image from './code-Parallax.jpeg'

const Parallax = (props) => {
  return (
    <div className="parallax-container">
      <div className="parallax"><img src={image} /> </div>
      </div>
  )
}

export default Parallax

