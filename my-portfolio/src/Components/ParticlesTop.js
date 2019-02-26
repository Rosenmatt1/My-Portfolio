import React, { Component } from 'react'
import Particles from 'react-particles-js'
import '../App.css'

const particleOpt = {
  enable: true,
  type: 'inside',
  move: {
    radius: 10
  },
  url: 'path/to/svg.svg'
}

class ParticlesTop extends Component {

  render() {
    return (
      <div className="ui-container">
        <div className="col">
          <div className="row particles">
            <Particles params={particleOpt} />

            <div className="title">
              <p className="border">Projects</p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default ParticlesTop


