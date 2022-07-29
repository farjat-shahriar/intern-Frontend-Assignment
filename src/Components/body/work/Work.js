import React from 'react'
import './Work.css'
import Sparetor from '../../separator/index'
import Fade from 'react-reveal/Fade';
const Work = () => {
  return (
    <div className="work">
      <div className="skillsection">
        <Fade bottom>
        <div className="skill">
          <div className="tag">
            <strong>MY SKILLEST</strong>
          </div>
          <h2>Frontend & <br />Backend Developer</h2>
         
            <a href="#process" className='my-process'>MY PROCESS</a>
            <Sparetor/>
          
        </div>
        <div className="paragraph">

        <p className='para'>  Hello, My name is Farjat Shahriar! I'm a front end developer. My job is to build your website so that it is functional and user-friendly but at the same time attractive.<br/></p>

<p className='para1'>I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.<br/>  </p>

<p className='text-item-1'> In my free time, I enjoy being outdoors, listening to music, traveling and experiencing new and exciting adventures. </p>
        </div>
        </Fade>
      </div>
    </div>

  )
}

export default Work
