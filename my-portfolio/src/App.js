import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header.js'
import ParticlesTop from './Components/ParticlesTop.js'
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
// import Parallax from './Components/Parallax.js'
import ModalProject1 from './Components/ModalProject1'
import ModalProject2 from './Components/ModalProject2'

class App extends Component {
  constructor() {
    super()
    this.state = {
      modal1Toggle: false,
      modal2Toggle: false
    }
  }

  modal1 = () => {
    this.setState({
      modal1Toggle: true
    })
    // ('.ui.modal')
    //   .modal('show')
  }

  modal2 = () => {
    this.setState({
      modal2Toggle: true
    })
  }

  modalOff = () => {
    this.setState({
      modal1Toggle: false,
      modal2Toggle: false
    })
  }
  
  render() {
    return (
      <div >
        <Header />
        <ParticlesTop />

        {this.state.modal1Toggle
          ? <ModalProject1
            modalOff={this.modalOff}
          />
          : ""}
      
        <Project1
          modal1={this.modal1}
          
        />

        {this.state.modal2Toggle
          ? <ModalProject2
            modalOff={this.modalOff}
          />
          : ""}

        <Project2
          modal2={this.modal2}
        /> 


      </div>

    )
  }
}

export default App;
