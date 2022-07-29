import React from 'react'
import  './Aboutme.css'
import Sparetor from '../../separator/index';
const Aboutme = () => {
  return (
    <div className="Aboutwork">
    <div className="workskillsection">
      <div className="workskill">
        <div className="work-tag">
          <strong>ABOUT ME</strong>
        </div>
        <h2>Designing with <br /> passion for Problem
        Solving & <br /> </h2>
       
          <a href="#" className='work-my-process'>FOLLOW ME INSTGRAM  <i className="fi fi-brands-instagram insta-icon"></i></a>
          <Sparetor/>
        
      </div>
      <div className="work-paragraph">

      <p className='work-para'> I’ve always been passionate about pixels and design projects and haven’t stopped working and learning about new technologies . Other than sitting in from of my display I enjoy myself in casual sports, such as bowling or playing football with friends.<br/></p> <br />

<p className='work-para1'>I'm grateful that my job allows me to work from anywhere.  I’m active on Instagram where I share most of the and all info about my upcoming projects.
<br/>  </p> <br />

<p className='work-text-item-1'>I also like sharing my experiences on instagram. </p>
      </div>
    </div>
  </div>

)
  
}

export default Aboutme