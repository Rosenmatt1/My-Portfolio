import React from 'react'
import '../App.css'
import me from './Assets/mateo.jpg'

// dark blue color #3e3e3e
// red color #b61924

const AboutMe= (props) => {
  return (
    <div className="aboutMe">
      <img className="mateo" src={me} alt="Matthew Rosenberg aka Mateo"/>
      <p>I am a full stack developer tha takes pride in making clean user friendly websites that are responsive, mobile friedlyand run flawlessly.  I love finding efficient solutions to problems.  In my spare time I enjoy nature, yoga, and dancing.</p>
    </div>
  )
}

export default AboutMe