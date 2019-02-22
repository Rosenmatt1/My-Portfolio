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
            onClick={() => this.props.modal2()}
          >
            Modal2
          </button>
          <img
            className='react-inbox'
            src='https://snag.gy/fM51Dd.jpg' alt='react-inbox'>
          </img>

        </div>
      </div>
    )
  }
}

export default Project3