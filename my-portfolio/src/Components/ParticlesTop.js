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
            {/* <button className="particlesButton">Ooo Baby Push It</button> */}
          </div>
        </div>
      </div>
    )
  }
}

export default ParticlesTop


