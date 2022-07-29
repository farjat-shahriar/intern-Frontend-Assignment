import React from 'react'
import  './Career.css'
import Fade from 'react-reveal/Fade';
const Career = () => {
  return (
    <div className='careersection'>
        <div className="left-colum">
          <h1 className="career">Career +</h1>
          <a href='#' className='cv'>GET MY CV</a>
        </div>
   
       <Fade left>
      
           <div className="right-colum">
            
           <div className="border"></div>
            <div className="rightdiv">
          
              <h3>DriveMe Fleets</h3>
              <p>Ux Designer</p>
              <p>march 2019</p>
            </div>
            <div className="border"></div>
            <div className="rightdiv">
            
              <h3>Meaninfulgigs</h3>
              <p>Creative Director</p>
              <p>Dec 2017 - Present</p>
            </div>
            <div className="border"></div>
            <div className="rightdiv">
           
              <h3>AlatbyWema</h3>
              <p>Product Designer</p>
              <p>Feb 2017 - Mar 2018</p>
            </div>
          
            <div className="border"></div>
            <div className="rightdiv">
           
              <h3>Mckinsey</h3>
              <p>Ui Designer</p>
              <p>Aug 2016 - Feb 2017</p>
            </div>
           </div>

           </Fade>
    </div>
  )
}

export default Career