import React from 'react'
import '../../App.css'
import react from './react.png'
import css from './css3.png'
import html from './html5.png'
import javascript from './javascript.png'
import sass from './sass.png'


const ReactCard = (props) => {
  return (
    <div className="row">

    <div className="skill">
      <img className="shrinker" src={react} alt="react" />
      <p>React</p>
    </div>

      <div className="skill">
        <img className="shrinker" src={css} alt="react" />
        <p>React</p>
      </div>

      <div className="skill">
        <img className="shrinker" src={html} alt="react" />
        <p>React</p>
      </div>

      <div className="skill">
        <img className="shrinker" src={javascript} alt="react" />
        <p>React</p>
      </div>

      <div className="skill">
        <img className="shrinker" src={sass} alt="react" />
        <p>React</p>
      </div>
      

    </div>

    
  )
}

export default ReactCard








