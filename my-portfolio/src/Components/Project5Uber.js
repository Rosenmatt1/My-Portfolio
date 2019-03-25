import React, { Component } from 'react'
import '../App.css'
import gif from './Assets/ubervslyft1.gif'

class Project5Uber extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="ui centered aligned grid eight wide column project-left">
            <div className="row">
              <h3 className="centered">Uber vs Lyft</h3>
            </div>
            <h5>Tech Used:</h5>
            <ul>
              <li>OAuth</li>
              <li>Lyft API</li>
              <li>Uber API</li>
              <li>Google Places API</li>
            </ul>
            <button
              className="ui button"
              onClick={() => this.props.modal5()}
            >
              Learn More...
          </button>
          </div>

          <div className="centered eight wide column project-right">
            <div className="giphy" >
              <img
                className="giphyImg"
                src={gif}
                alt="uber-vs-lyft-comparison"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project5Uber