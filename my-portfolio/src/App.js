import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header.js'
import ParticlesTop from './Components/ParticlesTop.js'
import Project1 from './Components/Project1'
// import Parallax from './Components/Parallax.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      projectModal1: false
    }
  }

  modal1 = (e) => {
    // console.log("it worked")
    this.setState({
      projectModal1: true
    })
    // ('.ui.modal')
    //   .modal('show')
  }
  
  render() {
    return (
      <div >
        <Header />
        <ParticlesTop />
        <Project1
          modal1={this.modal1}
          projectModal1={this.state.projectModal1} />
      </div>
    )
  }
}

export default App;
