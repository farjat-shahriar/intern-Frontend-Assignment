import React from 'react'
import './Body.css'
import About from './about/About'
import Work from './work/Work'
import Process from './process/Process'
import Projects from './projects/Projects'
import Career from './career/Career'
import Aboutme from './Aboutme/Aboutme'
import Case from './casestudies/Case'
import Contact from './contact/Contact'
const Body = () => {
  return (
    <div className='body'>
        <section id='about'>
             <About/>
        </section>
        <section id='work'>
             <Work/>
        </section>
        <section id='process'>
             <Process/>
        </section>
        <section id='project'>
             <Projects/>
        </section>
        <section id='career'>
             <Career/>
        </section>
        <section id='aboutme'>
             <Aboutme/>
        </section>
        <section id='case'>
             <Case/>
        </section>
        <section id='contact'>
             <Contact/>
        </section>
    </div>
  )
}

export default Body