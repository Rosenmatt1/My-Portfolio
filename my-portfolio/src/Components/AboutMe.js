import React from 'react'
import '../App.css'
import me from './Assets/mateo.jpg'
import resume from './Assets/Matthew-Rosenberg-Resume.pdf'

// dark blue color #3e3e3e
// red color #b61924

const AboutMe = (props) => {
  return (
    <div className="aboutMe">
      <h3>Meet Mateo</h3>
      <img className="mateo" src={me} alt="Matthew Rosenberg aka Mateo" />
      <p>I am a full stack developer tha takes pride in making clean user friendly websites that are responsive, mobile friedly and run flawlessly.  I love finding efficient solutions to problems.  In my spare time I enjoy nature, yoga, and dancing.</p>
      <h3 classname="meetMateo">View Resume</h3>
      <a
        target="_blank"
        href={resume}
        rel="noopener noreferrer">
          <i className="fas fa-file viewResume"></i>
      </a>
    </div>
  )
}

export default AboutMe