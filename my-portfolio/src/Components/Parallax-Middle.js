import React from 'react';
import { Parallax } from 'react-parallax';
import './Assets/code.png'
import '../App.css'
// import resume from './Assets/Matthew-Rosenberg-Resume.pdf'

const ParallaxMiddle = (props) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./Assets/code.png')}
      bgImageAlt="Matthew Rosenberg Full Stack Web Developer Denver, CO"
      strength={-200}
      // className="parallHeight"
      >

      <div style={{ height: "100px" }} />

      <div className="row parallax">
        <div className="titleWhite">
          <p className="borderWhite">Code On</p>
        </div>
      </div>
    </Parallax>

  
  )
}

export default ParallaxMiddle;