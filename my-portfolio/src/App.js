import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Particles from 'react-particles-js';
// import Parallax from './Components/Parallax.js'

const particleOpt =  {
  enable: true,
  type: 'inside',
  move: {
    radius: 10
                        },
  url: 'path/to/svg.svg'
                    }

class App extends Component {
  render() {
    return (
      <div >

        <Header />
        <Particles params={particleOpt} />
        
      </div>
    );
  }
}

export default App;
