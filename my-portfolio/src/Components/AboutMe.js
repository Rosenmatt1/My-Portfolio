import React from 'react'
import '../App.css'
import me from './Assets/mateo.jpg'
import resume from './Assets/Matthew-Rosenberg-Resume.pdf'
import ReactCard from './Cards/ReactCard.js'

// dark blue color #3e3e3e
// red color #b61924

const AboutMe = (props) => {
  return (
    <div className="ui stackable grid">

      <div className="centered eight wide column aboutMe">
        <div className="ui four column centered grid">
          <h3 className="column">Meet Mateo</h3>
        </div>
        <img className="mateo" src={me} alt="Matthew Rosenberg aka Mateo" />
        <p>I am a full stack developer that takes pride in making clean user friendly websites that are responsive, mobile friedly and run flawlessly.  I love finding efficient solutions to problems.  I am a health enthusiast that in my spare time enjoys nature, yoga, and dancing.</p>
      </div>

      <div className="centered eight wide column aboutMe">

        <ReactCard />

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