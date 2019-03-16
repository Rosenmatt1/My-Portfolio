import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import './Assets/pair-programming.jpg'
import '../App.css'

class ParallaxTop extends Component {

  render() {
    return (
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./Assets/pair-programming.jpg')}
        bgImageAlt="Matthew Rosenberg Web Development Denver, CO"
        strength={-200}
        // className="parallHeight"
      >
        <div style={{ height: '100px' }} />
        
          <div className="row parallax">
            <div className="titleWhite ">
              <p className="borderWhite">Bringing Ideas To Life</p>
            </div>
          </div>
      </Parallax>
    )
  }
}

export default ParallaxTop;






