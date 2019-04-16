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
              <h3 className="centered">MyWeather Buddy</h3>
            </div>
            <h5>Tech Used:</h5>
            <p>-React Native</p>
            <p>-JavaScript</p>
            <p>-Node.js/PostgreSQL/Express/Knex</p>
            <p>-GoeCoordinates API</p>
            <p>-OpenWeather API</p>
            <p>-Twilio API</p>

            <button
              className="ui button"
              onClick={() => this.props.modal5()}
            >
              Learn More...
            </button>
          </div>

          <div className="ui centered aligned grid eight wide column project-right spacer">
            <div className="giphyWeather" >
              <img
                className="giphyImg ui fluid image"
                src={gif}
                alt="myweatherbuddy-react-native"
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Project6Weather