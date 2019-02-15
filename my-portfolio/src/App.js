import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Particles from 'react-particles-js';
// import Parallax from './Components/Parallax.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Particles />
        
       
      </div>
    );
  }
}

export default App;
