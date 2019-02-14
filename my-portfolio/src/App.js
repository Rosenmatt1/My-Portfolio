import React, { Component } from 'react';
import './App.css';
// import Header from './Components/Header.js'
// import Parallax from './Components/Parallax.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <div class="ui menu">
          <a class="item">Browse</a>
          <a class="item">Submit</a>
          <div class="right menu">
            <a class="item">Sign Up</a>
            <a class="item">Help</a>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
