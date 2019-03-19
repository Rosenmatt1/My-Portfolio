import React from 'react'
import '../../App.css'
import image from './react.png'

const ReactCard = (props) => {
  return (
    // <div className="skill">
    //   <div class="ui link card">
    //     <div class="image">
    //       <img src={image} alt="react" />
    //     </div>
    //     <div class="content">
    //       <p class="header">React</p>
    //     </div>
    //   </div>
    // </div>

    <div className="skill1">
      <img className="shrinker" src={image} alt="react" />
      <p>React</p>

    </div>
  )
}

export default ReactCard








