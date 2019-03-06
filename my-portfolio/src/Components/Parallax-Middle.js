import React from 'react';
import { Parallax } from 'react-parallax';
import './code.png'
import '../App.css'
import resume from './Matthew-Rosenberg-Resume.pdf'

const ParallaxMiddle = (props) => (
  <div className="heightParallax">
    <div className="parallax">
      <div className="titleWhite">
        <p className="borderWhite">Bringing Ideas to Life</p>
        <a target="_blank" href={resume} rel="noopener noreferrer">
          <button>
            <i className="download icon"></i>
          </button>
        </a>
      </div>
    </div>

    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./code.png')}
      bgImageAlt="Matthew Rosenberg Full Stack Web Developer Denver, CO"
      strength={-200}
    >
      <div style={{ height: '300px' }} />
    </Parallax>

  </div>
);

export default ParallaxMiddle;