import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header.js'
import ParticlesTop from './Components/ParticlesTop.js'
import Project1 from './Components/Project1'
// import Parallax from './Components/Parallax.js'
import ModalProject1 from './Components/ModalProject1'

class App extends Component {
  constructor() {
    super()
    this.state = {
      modal1Toggle: false
    }
  }

  modal1 = () => {
    this.setState({
      modal1Toggle: true
    })
    // ('.ui.modal')
    //   .modal('show')
  }

  modal1off = () => {
    this.setState({
      modal1Toggle: false
    })
  }
  
  render() {
    return (
      <div >
        <Header />
        <ParticlesTop />

        {this.state.modal1Toggle
          ? <ModalProject1 
            modal1off={this.modal1off}
            />
          : ""}
      
        <Project1
          modal1={this.modal1}
        />
      </div>

    )
  }
}

export default App;
