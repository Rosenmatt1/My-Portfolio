import React, { Component } from 'react'
import '../App.css'
// import image from './pair-programming.jpg'

class Project1 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column project-left"></div>

        <div className="eight wide column project-right">

          <button 
            className="ui button"
            onClick={(e) => this.props.modal1(e)}
          >
            Modal1
          </button>

        </div>
      </div>
    )
  }
}

export default Project1
