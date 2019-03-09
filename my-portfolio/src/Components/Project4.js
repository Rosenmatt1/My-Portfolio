import React, { Component } from 'react'
import '../App.css'
import gif from './chuck-norris.gif'

class Project4 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui center aligned grid eight wide column project-left project4">
          <h3>Chuck Norris Joke Generator</h3>
          <h5>Tech Used:</h5>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>CRUD</li>
            <li>GET, POST, DEL, PUT</li>
          </ul>
          <button
            className="ui button"
            onClick={() => this.props.modal4()}
          >
            Learn More...
          </button>
        </div>

        <div className="eight wide column project-right">
        
          <div className="giphy" >
            {/* <iframe src="https://media.giphy.com/media/5h265MKGKktjbrCeUn/giphy.gif" title="project4" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */
            <img src={gif} alt="chuck-norris-joke-generator" />
          }
          </div>

        </div>
      </div>
    )
  }
}

export default Project4