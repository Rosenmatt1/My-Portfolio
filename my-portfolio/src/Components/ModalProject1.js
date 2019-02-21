import React, { Component } from 'react'
import '../App.css'
import image from './pair-programming.jpg'

class ModalProject1 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="ui centered ten wide column">
          <div className="ui active modal" >
            {/* <i className="close icon"></i> */}
            <div className="header">
              Profile Picture
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img
                  src={image}
                  alt="image for project 1" />
              </div>
              <div className="description">
                <div className="ui header">We've auto-chosen a profile image for you.</div>
                <p>We've grabbed the following image from the <a href="https://www.gravatar.com"    target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </div>
            </div>
            <div className="actions">
              <div className="ui black deny button">
                Nope
              </div>
              <div className="ui red right labeled icon button">
                Visit Site
              <i className="checkmark icon"></i>
              </div>
            </div>
          </div >

        </div>
      </div>
    )
  }
}

export default ModalProject1