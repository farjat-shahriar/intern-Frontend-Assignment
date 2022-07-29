import React from 'react'
import './About.css';
import Sparetor from '../../separator/index'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div className='about'>
            <div className="design">
                <span className='top-info'>Designer</span>
                </div>
            <div className="about-top">
            <div className='about-info'>
   
                <Fade bottom>
               <span className='top'>Hello, It's me</span>  <br /><span className='name'>Farjat Shahriar</span>
               <span className='dot'>.</span>
                <br />  <span className='bottom'>I love experimenting with the Web.</span> 
             <div className="button1">
                <a href='#work' className='about-btn'>SCROLL FOR MORE</a>
                <Sparetor/>
                </div>   
                </Fade>
            </div>
            <div className='about-photo'></div>
            <Zoom>  <img src={require('../../../picture/joy.jpg')} className="picture"/></Zoom>
          
            </div>
            
        </div>
    )
}

export default About