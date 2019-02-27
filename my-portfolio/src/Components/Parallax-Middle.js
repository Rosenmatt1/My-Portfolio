import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './code.png'
import '../App.css'

const ParallaxMiddle = (props) => (
  <div>
    <div className="titleWhite">
      <p className="borderWhite">Projects</p>
    </div>

    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./code.png')}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div style={{ height: '300px' }} />
    </Parallax>
  </div>
);

export default ParallaxMiddle;