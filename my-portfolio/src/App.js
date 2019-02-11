import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'

// import Parallax from './Components/Parallax.js'


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Header /> */}
        <div class="ui menu">
          <div class="header item">
            Our Company
  </div>
          <a class="item active">
            About Us
  </a>
          <a class="item">
            Jobs
  </a>
          <a class="item">
            Locations
  </a>
        </div>
        
       
      </div>
    );
  }
}

export default App;
