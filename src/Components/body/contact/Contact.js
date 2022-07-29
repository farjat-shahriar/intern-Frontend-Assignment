import React from 'react'
import './Contact.css'
import Separator from '../../separator/index'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="info">

        <div className="whatsnext">WHATS NEXT</div>
        <div className="contact-info">Lets work together.</div>
        <div className="conatct-info-paragraph">

          <p className='contactpara'>  If you'd like to talk about a project you want help with or need an advice about<br /></p>

          <p className='contactpara1'> product design, just drop me a message at <span className='email'>farjatshahriarjoy@gmail.com</span><br />
            I'm currently Available for any design systems projects, dashboard designs or<br />  </p>

          <p className='contacttext-item-1'>  landing pages.</p>
        </div>

        <div className="email-section"><a className='email-section' href='#'>WRITE ME AN EMAIL</a> <i className="fi fi-rr-envelope icon"></i></div>
        <Separator />
      </div>



    </div>
  )
}

export default Contact