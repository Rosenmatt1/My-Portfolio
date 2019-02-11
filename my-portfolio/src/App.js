import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="/">About Me</a></li>
              <li><a href="/">Components</a></li>
              <li><a href="/">JavaScript</a></li>
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}

export default App;
