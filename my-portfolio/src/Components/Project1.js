import React, { Component } from 'react'
import '../App.css'

class Project1 extends Component {

  render() {
    return (
      <div className="ui grid borderless">
        <div className="ui center aligned grid eight wide column project-left borderless">
            <h3>Project 1</h3>
            <p>Tech Used:</p>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
            <button
              className="ui button"
              onClick={() => this.props.modal1()}
            >
              Modal1
              </button>
        </div>


        <div className="column eight wide column centered project-right">
          <div className="giphy">
            <iframe src="https://media.giphy.com/media/fxyXMsfLq1JxlTqBPh/giphy.gif" title="project1" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>

      </div>
    )
  }
}

export default Project1
