import React, { Component } from 'react'
import '../App.css'
import image from './pair-programming.jpg'

class ModalProject3 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui centered ten wide column">
          <div className="ui active modal" >
            <i
              className="close icon"
              onClick={() => this.props.modalOff()}
            ></i>
            <div className="header">
              Project 3
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  src={image}
                  alt="image for project 1" />
              </div>
              <div className="description">
                <div className="ui header">Quirky Line here...</div>
                <p>This is a web app called <a href="/" target="_blank">React Inbox</a> that gives a fully function email inbox.</p>
                <p>Check it out.</p>
              </div>
            </div>
            <div className="actions">
              <div
                className="ui black deny button"
                onClick={() => this.props.modalOff()}
              >
                Close
              </div>
              <div className="ui red right labeled icon button">
                Visit Site
              <i className="angle up icon"></i>
              </div>
            </div>
          </div >

        </div>
      </div>
    )
  }
}

export default ModalProject3