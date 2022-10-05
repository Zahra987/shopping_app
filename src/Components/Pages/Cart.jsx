import React from 'react';
import '../../Css/cart.css'
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
export default function Cart() {
  return (
    <section className='cart_container' >
      <CartHeader/>
     <div className='cart_items_container' >
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
     </div>
    </section>

  )
}
