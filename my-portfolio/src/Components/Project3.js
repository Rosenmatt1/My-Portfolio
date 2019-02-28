import React, { Component } from 'react'
import '../App.css'

class Project3 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column project-left">
          <h3>Project 3</h3>
          <p>Tech Used:</p>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li></li>
          </ul>
        </div>

        <div className="eight wide column project-right">

          <button
            className="ui button"
            onClick={() => this.props.modal3()}
          >
            Modal3
          </button>

          <div className="giphy" >
            <iframe src="https://giphy.com/embed/8UHxgchA1CH89Y1eGg" width="100%" height="100%"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
          <p>
            <a href="https://giphy.com/gifs/8UHxgchA1CH89Y1eGg">via GIPHY</a>
          </p>

        </div>
      </div>
    )
  }
}

export default Project3