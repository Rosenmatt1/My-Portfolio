import React, { Component } from 'react'
import '../App.css'
import inboxGif from './Assets/react-inbox.gif'

class Project2 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui center aligned grid eight wide column project-left">
          <h3>React Inbox</h3>
          <h5>Tech Used:</h5>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
          </ul>
          <button
            className="ui button"
            onClick={() => this.props.modal2()}
          >
            Learn More...
          </button>
        </div>

        <div className="eight wide column project-right">

          <div className="giphy" >
            {/* <iframe src="https://media.giphy.com/media/8UHxgchA1CH89Y1eGg/giphy.gif" title="project2" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
            <img 
              className="giphyImg"
              src={inboxGif} 
              alt="react-inbox-project" 
            />
          </div>

        </div>
      </div>
    )
  }
}

export default Project2