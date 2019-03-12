import React, { Component } from 'react'
import '../App.css'
import gif from './Assets/ubervslyft1.gif'

class Project5Uber extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui center aligned grid eight wide column project-left project4">
          <h3>Uber vs Lyft</h3>
          <h5>Tech Used:</h5>
          <ul>
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

        <div className="eight wide column project-right">
        
          <div className="giphy" >
            {/* <iframe src="https://media.giphy.com/media/5h265MKGKktjbrCeUn/giphy.gif" title="project4" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */
            <img src={gif} alt="uber-vs-lyft-comparison" />
          }
          </div>

        </div>
      </div>
    )
  }
}

export default Project5Uber