import React from 'react'

export default function CartHeader() {
  return (
    <>
    <div className='cart_total_container' >
      <div className='total_items' > total items 11</div>
      <div className='total_payments' > total payments 1181.21 </div>
     </div>
     <div className='cart_clear_continue_container' >
      <div className='cart_clear' >clear</div>
      <div className='cart_continue' >continue</div>
     </div>
     </>
  )
}
