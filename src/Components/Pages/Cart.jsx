import React,{useState,useEffect} from 'react';
import '../../Css/cart.css';
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
import {useSelector} from 'react-redux';
import Vacant from '../Vacant';

export default function Cart() {

  const cartProducts = useSelector((state) => state.cartReducer);
  

  return (
   <>
    {(cartProducts.length == 0) ? <Vacant message='شما خریدی انجام نداده اید'/> : 
      <section className='cart_container' >
        <CartHeader/>
        <div className='cart_items_container' >
         {cartProducts.map((item,index) => <CartItem cartItemInfo={item} key={index} />)}
        </div>
      </section>
    }
   </>
  )}