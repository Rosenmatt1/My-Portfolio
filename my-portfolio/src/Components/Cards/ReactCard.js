import React from 'react'
import '../../App.css'
import image from './react.png'

const ReactCard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <a className="header">Kristy</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
              </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends </a>
      </div>
    </div>
  )
}

export default ReactCard








