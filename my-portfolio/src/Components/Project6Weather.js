import React, { Component } from 'react'
import '../App.css'
import gif from './Assets/myweatherbuddy.gif'

class Project6Weather extends Component {

  render() {
    return (
      <div className="ui stackable grid">
        <div className="row spacer">

          <div className="ui centered aligned grid eight wide column project-left">

            <div className="centered row">
              <h3 className="centered"></h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-OAuth</p>
            <p>-Lyft API</p>
            <p>-Uber API</p>
            <p>-Google Places API</p>

            <button
              className="ui button"
              onClick={() => this.props.modal5()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column project-right spacer">
            <div className="giphy" >
              <img
                className="giphyImg ui fluid image"
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

export default Project6Weather