import React from 'react'
import  './Case.css'
const Case = () => {
  return (
    <div>
       <label className='case'> Case Studies +</label>
      <div className="casestudies">
       
        <div className="images">
          <img className='img_1' src='https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU=' alt='Bricks'></img>
          <div className="img_overlay">
            <div className="img_title">FirstbankQuest</div>
          </div>
        </div>
        <div className="images">
          <img className='img_2' src='https://etimg.etb2bimg.com/thumb/inflation-a-drag-on-ecommerce-juggernaut-size-42114/93099095.cms?width=362&height=240' alt='Bricks'></img>
          <div className="img_overlay">
            <div className="img_title">Soovu</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Case