import React from 'react';
import {GoDiffAdded} from 'react-icons/go';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {CgRemoveR} from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import {decreasePurchases, increasePurchases} from '../redux/actions';

export default function CartItem({cartItemInfo}) {
  const {product, numberOfPurchases } = cartItemInfo;
  const dispatch = useDispatch();
  return (
    <div className='cart_item_container' >
        <div className='cart_item_img' >
          <img src={product.image} />
        </div>
        <div className='name_and_price' >
          <div className='item_name' >{product.category}</div>
          <div className='item_price' >{product.price} $ </div>
        </div>
        <div className='total_item_container' >
          <div className='total_item' >{numberOfPurchases}</div>
        </div>
        <div className='item_rem_add_container' >
          <div className='item_rem_icon'
               onClick={()=>{
                dispatch(decreasePurchases(product.id ,numberOfPurchases));
               } }
               >{numberOfPurchases == 1 ? <RiDeleteBin5Line/> : <CgRemoveR/>}</div>
          <div className='item_add_icon'
               onClick={()=>{
                dispatch(increasePurchases(product.id ,numberOfPurchases));
               }}
              ><GoDiffAdded/></div>
        </div>
      </div>
  )
}
