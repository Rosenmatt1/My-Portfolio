import React, { Component } from 'react'
import '../App.css'
// import image from './pair-programming.jpg'

class Project1 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column project-left">
          <h3>Project 1</h3>
          <p>Tech Used:</p>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="eight wide column project-right">

          <button 
            className="ui button"
            onClick={() => this.props.modal1()}
          >
            Modal1
          </button>

        </div>
      </div>
    )
  }
}

export default Project1
