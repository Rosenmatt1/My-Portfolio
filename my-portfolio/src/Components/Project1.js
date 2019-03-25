import React, { Component } from 'react'
import '../App.css'
import gif from './Assets/jsflashcards.gif'

class Project1 extends Component {

  render() {
    return (
      <div className="ui grid borderless middle aligned content">

        <div className="ui centered aligned grid eight wide column project-left borderless">
          {/* <div className="middle aligned content"> */}
            <h3>JS Flashcards</h3>
            <h5>Tech Used:</h5>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Express.js</li>
            </ul>
            <button
              className="ui button"
              onClick={() => this.props.modal1()}
            >
              Learn More...
              </button>
            {/* </div> */}
        </div>

        <div className="column eight wide column centered project-right">
          <div className="giphy">
            <img 
              className="giphyImg"
              src={gif} 
              alt="jsflashcards-project" 
            />
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Project1
