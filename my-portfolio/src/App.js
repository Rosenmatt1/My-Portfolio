import React, { Component } from 'react'
import './App.css'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from './Components/Header.js'
import ParticlesTop from './Components/ParticlesTop.js'
import AboutMe from './Components/AboutMe.js'
import ReactCards from './Components/Cards/ReactCards.js'
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'
import Project4 from './Components/Project4'
import Project5Uber from './Components/Project5Uber'
import Project6Weather from './Components/Project6Weather'
import ParallaxTop from './Components/Parallax.js'
import ParallaxMiddle from './Components/Parallax-Middle.js'
import ModalProject1 from './Components/ModalProject1'
import ModalProject2 from './Components/ModalProject2'
import ModalProject3 from './Components/ModalProject3'
import ModalProject4 from './Components/ModalProject4'
import ModalProject5 from './Components/ModalProject5'
import ModalProject6 from './Components/ModalProject6'
import Footer from './Components/Footer.js'

// const JSurl = "https://jsflashcards.herokuapp.com/flashcards/"
// const InboxUrl = "https://react-email-inbox.herokuapp.com/api/messages/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      modal1Toggle: false,
      modal2Toggle: false,
      modal3Toggle: false,
      modal4Toggle: false,
      modal5Toggle: false,
      modal6Toggle: false,
      aboutMeDisplay: false,
      projectsDiplay: true,
      jsServerWakeUp: false
    }
  }

  componentDidMount() {
    // fetch(JSurl)
    fetch(InboxUrl)
    this.setState({ jsServerWakeUp: true })
  }

  // aboutMeButton = (e) => {
  //   e.preventDefault()
  //   console.log("about me")
  //   this.setState({
  //     aboutMeDisplay: true,
  //     projectsDiplay: false
  //   })
  // }

  projectsButton = (e) => {
    e.preventDefault()
    console.log("projects")
    this.setState({
      aboutMeDisplay: false,
      projectsDiplay: true
    })
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

  modal5 = () => {
    this.setState({
      modal5Toggle: true
    })
  }

  modal6 = () => {
    this.setState({
      modal6Toggle: true
    })
  }

  modalOff = () => {
    this.setState({
      modal1Toggle: false,
      modal2Toggle: false,
      modal3Toggle: false,
      modal4Toggle: false,
      modal5Toggle: false,
      modal6Toggle: false,
    })
  }

  render() {
    return (
      <div>

        <Header
          // aboutMeButton={this.aboutMeButton}
          // projectsButton={this.projectsButton}
        />

        {/* {this.state.aboutMeDisplay
          ? <AboutMe />
          : <ParticlesTop />
        } */}

        <ParticlesTop />
        
        <AboutMe />

        <ReactCards />
        
        {/* <Router>
          <div>
            <Header />
            <Route path="/" exact render={() => <ParticlesTop />}
            />
            <Route path="/aboutme/" render={() => <AboutMe />}
            />
            <Route path="/projects/" render={() => <ParticlesTop />}
            />
          </div>
        </Router> */}

        <ParallaxTop />

        {this.state.modal5Toggle
          ? <ModalProject5
            modalOff={this.modalOff}
          />
          : ""}

        <Project5Uber
          modal5={this.modal5}
        />

        <div className="ui ten column centered grid">
          <div className="ui centered centered divider" />
        </div>

        {this.state.modal6Toggle
          ? <ModalProject6
            modalOff={this.modalOff}
          />
          : ""}

        <Project6Weather
          modal6={this.modal6}
        />

        <div className="ui ten column centered grid">
          <div className="ui centered centered divider" />
        </div>

        {this.state.modal1Toggle
          ? <ModalProject1
            modalOff={this.modalOff}
          />
          : ""}

        <Project1
          modal1={this.modal1}
        />

        <div className="ui ten column centered grid">
          <div className="ui centered centered divider" />
        </div>

        <ParallaxMiddle />

        {this.state.modal2Toggle
          ? <ModalProject2
            modalOff={this.modalOff}
          />
          : ""}

        <Project2
          modal2={this.modal2}
        />

        <div className="ui ten column centered grid topMargin">
          <div className="ui centered divider" />
        </div>

        {this.state.modal3Toggle
          ? <ModalProject3
            modalOff={this.modalOff}
          />
          : ""}

        <Project3
          modal3={this.modal3}
        />

        <div className="ui ten column centered grid">
          <div className="ui centered centered divider" />
        </div>

        {this.state.modal4Toggle
          ? <ModalProject4
            modalOff={this.modalOff}
          />
          : ""}

        <Project4
          modal4={this.modal4}
        />

        <Footer />

      </div>
    )
  }
}

export default App;
