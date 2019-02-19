import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header.js'
import ParticlesTop from './Components/ParticlesTop.js'
import Project1 from './Components/Project1'
// import Parallax from './Components/Parallax.js'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <ParticlesTop />
        <Project1 />
      </div>
    )
  }
}

export default App;
