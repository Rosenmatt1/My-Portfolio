import React from 'react'
import '../App.css'
import me from './Assets/mateo.jpg'
import resume from './Assets/Matthew-Rosenberg-Resume.pdf'

const AboutMe = (props) => {
  return (
    <div className="ui stackable grid aboutMe">

      <div className="middle aligned centered eight wide column">
        <img className="mateo" src={me} alt="Matthew Rosenberg aka Mateo" />
      </div>

      <div className="middle aligned centered eight wide column">
        <div className="ui four column centered grid">
          <h2 className="meetMateo centered eight wide row">Meet Mateo</h2>
        </div>
        <p className="spacing">I am a full stack developer that takes pride in making clean user friendly websites that are responsive, mobile friedly and run flawlessly.  I love finding efficient solutions to problems.  I am a health enthusiast that in my spare time enjoys nature, yoga, and dancing.</p>

        <div className="centered resume row">
          <div className="ui four column centered grid resume">
            <h3 >View Resume</h3>
            <a
              target="_blank"
              href={resume}
              rel="noopener noreferrer">
              <i className="fas fa-file-alt viewResume"></i>
            </a>
          </div>
        </div>

      </div>
    </div >
  )
}

export default AboutMe