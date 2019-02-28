import React, { Component } from 'react'
import '../App.css'

class Project2 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column project-left">
          <h3>Project 2</h3>
          <p>Tech Used:</p>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li></li>
          </ul>
          <button
            className="ui button"
            onClick={() => this.props.modal2()}
          >
            Modal2
          </button>
        </div>

        <div className="eight wide column project-right">


          <div className="giphy" >
            <iframe src="https://media.giphy.com/media/8UHxgchA1CH89Y1eGg/giphy.gif" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
          <p>
            <a href="https://giphy.com/gifs/8UHxgchA1CH89Y1eGg">via GIPHY</a>
          </p>

        </div>
      </div>
    )
  }
}

export default Project2