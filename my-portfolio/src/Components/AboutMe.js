import React from 'react'
import '../App.css'
import me from './Assets/mateo.jpg'
import resume from './Assets/Matthew-Rosenberg-Resume.pdf'

// dark blue color #3e3e3e
// red color #b61924

const AboutMe = (props) => {
  return (

    <div class="ui grid">
      <div class="three column row">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
    </div>

    <div class="ui grid">
      <div class="four wide column"></div>
      <div class="four wide column"></div>
      <div class="four wide column"></div>
    </div>



    <div className="aboutMe">
      <h3>Meet Mateo</h3>
      <img className="mateo" src={me} alt="Matthew Rosenberg aka Mateo" />
      <p>I am a full stack developer that takes pride in making clean user friendly websites that are responsive, mobile friedly and run flawlessly.  I love finding efficient solutions to problems.  I am a health enthusiast that in my spare time enjoys nature, yoga, and dancing.</p>
      <h3 classname="meetMateo">View Resume</h3>
      <a
        target="_blank"
        href={resume}
        rel="noopener noreferrer">
        <i className="fas fa-file-alt viewResume"></i>
      </a>
    </div>
  )
}

export default AboutMe