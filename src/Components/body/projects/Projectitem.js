import React from 'react'
import  './Projectitem.css';
const Projectitem = ({items}) => {
  return (
    <div >
   <div className="item-img">
            <img src={items.cover} alt={items.title} className="item-image"/>
        </div>
     
     <div className="item-title">{items.titil}</div>

</div>
  )
}

export default Projectitem