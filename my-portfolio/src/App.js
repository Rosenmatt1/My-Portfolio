import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header.js'
import ParticlesTop from './Components/ParticlesTop.js'
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'
import Project4 from './Components/Project4'
import ParallaxTop from './Components/Parallax.js'
import ParallaxMiddle from './Components/Parallax-Middle.js'
import ModalProject1 from './Components/ModalProject1'
import ModalProject2 from './Components/ModalProject2'
import ModalProject3 from './Components/ModalProject3'
import ModalProject4 from './Components/ModalProject4'

class App extends Component {
  constructor() {
    super()
    this.state = {
      modal1Toggle: false,
      modal2Toggle: false,
      modal3Toggle: false,
      modal4Toggle: false
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

  modal3 = () => {
    this.setState({
      modal3Toggle: true
    })
  }

  modal4 = () => {
    this.setState({
      modal4Toggle: true
    })
  }

  modalOff = () => {
    this.setState({
      modal1Toggle: false,
      modal2Toggle: false,
      modal3Toggle: false,
      modal4Toggle: false,
    })
  }
  
  render() {
    return (
      <div >
        <Header />
        <ParticlesTop />
        <ParallaxTop/>

        {this.state.modal1Toggle
          ? <ModalProject1
            modalOff={this.modalOff}
          />
          : ""}
      
        <Project1
          modal1={this.modal1}
        />

        <div className="ui divider"></div>

        {this.state.modal2Toggle
          ? <ModalProject2
            modalOff={this.modalOff}
          />
          : ""}

        <Project2
          modal2={this.modal2}
        /> 

        <ParallaxMiddle />

        {this.state.modal3Toggle
          ? <ModalProject3
            modalOff={this.modalOff}
          />
          : ""}

        <Project3
          modal3={this.modal3}
        /> 

        {this.state.modal4Toggle
          ? <ModalProject4
            modalOff={this.modalOff}
          />
          : ""}

        <Project4
          modal4={this.modal4}
        /> 


      </div>

    )
  }
}

export default App;
