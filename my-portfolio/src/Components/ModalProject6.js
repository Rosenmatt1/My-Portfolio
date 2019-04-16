import React, { Component } from 'react'
import '../App.css'
// import image from './Assets/ubervslyft1.gif'

class ModalProject6 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui centered ten wide column">
          <div className="ui active modal" >
            <i
              className="close icon"
              onClick={() => this.props.modalOff()}
            ></i>
            <div className="header">
              MyWeather Buddy App
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  className="ubervslyft"
                  src={image}
                  alt="uber-vs-lyft-price-compare" />
              </div>
              <div className="description">
                <div className="ui header">Uber vs Lyft</div>
                <p>This is a web app called <a
                  href="https://www.youtube.com/watch?v=zD2TZHcZXT8"
                  target="_blank"
                  rel="noopener noreferrer">Better Ride
                </a> that pulls live data from the Uber and Lyft API to compare price and estimated time of arrival.  The input fields for the address utilize an API call to the Google places API to use predicitve autocomplete and get the longitiude and latitude needs for the Uber and Lyft requests. </p>
                <p>Try it out...</p>
              </div>
            </div>
            <div className="actions">
              <div
                className="ui black deny button"
                onClick={() => this.props.modalOff()}
              >
                Close
              </div>

              <a
                target="_blank"
                href="https://ubervslyftapp.firebaseapp.com/"
                rel="noopener noreferrer"
                onClick={() => this.props.modalOff()}
              >
                <div className="ui red right labeled icon button">
                  Visit Site
                  <i className="angle up icon"></i>
                </div>
              </a>

            </div>
          </div >

        </div>
      </div>
    )
  }
}

export default ModalProject6