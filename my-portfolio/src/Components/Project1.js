import React, { Component } from 'react'
import '../App.css'

class Project1 extends Component {

  render() {
    return (
      // <div className="ui two column grid container">
      //   <div className="row">
      //     <div className="column project-left"></div>
      //     <div className="column project-right"></div>
      //   </div>
      // </div>
      <div className="ui grid">
          <div className="eight wide column project-left"></div>
          <div className="eight wide column project-right"></div>
      </div>
    )
  }
}

export default Project1
