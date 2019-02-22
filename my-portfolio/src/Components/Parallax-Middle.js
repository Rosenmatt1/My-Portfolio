import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './code-Parallax.jpeg'
import './pair-programming.jpg'
import '../App.css'

const ParallaxMiddle = (props) => (
  <div>

<Parallax
  blur={{ min: -15, max: 15 }}
  bgImage={require('./code-Parallax.jpeg')}
  bgImageAlt="the dog"
  strength={-200}
>
  {/* Blur transition from min to max */}
            <div style={{ height: '300px' }} />
</Parallax>

  </div>
);

  export default ParallaxMiddle;