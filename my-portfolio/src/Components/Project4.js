import React, { Component } from 'react'
import '../App.css'

class Project4 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column project-left project4">
          <h3>Project 4</h3>
          <p>Tech Used:</p>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li></li>
          </ul>
          <button
            className="ui button"
            onClick={() => this.props.modal4()}
          >
            Modal4
          </button>
        </div>

        <div className="eight wide column project-right">


          <div className="giphy" >
            <iframe src="https://giphy.com/embed/8UHxgchA1CH89Y1eGg" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
          <p>
            <a href="email-inbox-react.firebaseapp.com">via GIPHY</a>
          </p>

        </div>
      </div>
    )
  }
}

export default Project4