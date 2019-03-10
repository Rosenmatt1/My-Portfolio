import React, { Component } from 'react'
import '../App.css'
import gif from './Assets/boulevard-diner.gif'

class Project3 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui center aligned grid eight wide column project-left">
          <h3>Boulevard Diner</h3>
          <h5>Tech Used:</h5>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>DOM Manipulation</li>
            <li>Responsive Web Design</li>
          </ul>
          <button
            className="ui button"
            onClick={() => this.props.modal3()}
          >
            Learn More...
          </button>
        </div>

        <div className="eight wide column project-right">

          <div className="giphy" >
            {/* <iframe src="https://media.giphy.com/media/3rYNmhf3z6kMorFOE5/giphy.gif" title="project3" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
            <img src={gif} alt="boulevard diner website" />
          </div>

        </div>
      </div>
    )
  }
}

export default Project3