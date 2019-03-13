import React, { Component } from 'react'
import { Parallax} from 'react-parallax';
import './Assets/pair-programming.jpg'
import '../App.css'

class ParallaxTop extends Component {

  render() {
    return (
  <div className="ui-container"> 
    <div className="row parallax">

      <div className="titleWhite ">
        <p className="borderWhite">Bringing Ideas to Life</p>
      </div>
    </div>
    
    
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./Assets/pair-programming.jpg')}
      bgImageAlt="Matthew Rosenberg Web Development Denver, CO"
      strength={-200}
    >
      <div style={{ height: '350px' }} />
    </Parallax>

    
  </div>
    )
  }
}

export default ParallaxTop;






