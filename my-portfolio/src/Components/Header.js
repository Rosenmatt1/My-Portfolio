import React from 'react'
import '../App.css'
import github from './github.png'
import linkedin from './linkedin.png'

// dark blue color #3e3e3e
// red color #b61924

const Header = (props) => {
  return (
    <div className="ui menu">

      {/* <div className="four column row"> */}
        {/* <div className="left floated column"> */}
          <a className="item" href="/">About Mateo</a>
          <a className="item" href="/">Projects</a>
        {/* </div> */}
      {/* </div> */}

       {/* <div className="four column row"> */}
        <div className=" right menu">
          <img className="github" src={github}></img>
          <img className="linkedin" src={linkedin}></img>
        {/* </div> */}
      </div>

    </div>



    // <div class="ui grid">
    //   <div class="four column row">
    //     <div class="left floated column"></div>
    //     <div class="right floated column"></div>
    //   </div>
  )
}

{/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */ }

export default Header

