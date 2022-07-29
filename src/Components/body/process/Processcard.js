import React from 'react'
import  './Processcard.css'
import Fade from 'react-reveal/Fade';
const Processcard = ({card}) => {
  return (
    <div className='explore'>
  {card && card.map((props)=>{
    return (
        <div className="processmain">

       <div className='main-card'>
        
            <div className="card-id">{props.id}</div>
            <div className="card-title">{props.title}</div>
            <div className="item">
            <div className="item1">{props.item1}</div>
            <div className="item2">{props.item2}</div>
            <div className="item3">{props.item3}</div>
            <div className="item4">{props.item4}</div>
            </div>
          
        
            
            
         </div>
        </div>
      
    )
  })}

    </div>
  )
}

export default Processcard