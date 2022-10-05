import React from 'react'
import aab from '../Images/imgab.jpg';

export default function CartItem() {
  return (
    <div className='cart_item_container' >
        <div className='cart_item_img' >
          <img src={aab} />
        </div>
        <div className='name_and_price' >
          <div className='item_name' >mens casual</div>
          <div className='item_price' >22.3</div>
        </div>
        <div className='total_item_container' >
          <div className='total_item' >1</div>
        </div>
        <div className='item_rem_add_container' >
          <div className='item_rem_icon' >remicon</div>
          <div className='item_add_icon' >addicon</div>
        </div>
      </div>
  )
}
