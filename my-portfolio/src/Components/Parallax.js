import React from 'react';
import { Parallax} from 'react-parallax';
import './pair-programming.jpg'
import '../App.css'

const ParallaxTop = (props) => (
  <div className="ui-container heightParallax"> 
    <div className="row parallax ">

      <div className="titleWhite ">
        <p className="borderWhite">Bringing Ideas to Life</p>
      </div>
    </div>
    
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./pair-programming.jpg')}
      bgImageAlt="Matthew Rosenberg Web Development Denver, CO"
      strength={-200}
    >
      <div style={{ height: '300px' }} />
    </Parallax>

  </div>
);

export default ParallaxTop;






