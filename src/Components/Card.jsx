import React from 'react';
import { useRef } from 'react';
import {BsBookmarkStar, BsDisplay} from 'react-icons/bs';
import {CgRemoveR} from 'react-icons/cg';
import {GoDiffAdded} from 'react-icons/go';
import '../Css/navbar.css';
export default function Card(props) {
  const {image,category,price}=props.product
  const addCardRef = useRef();
  const negRef = useRef();
  const saveRef = useRef();
  return (
      <div className='card_container' >
        <div className='img_container' >
          <img src={image}  alt='s' />
        </div>
        <h3>{category}</h3>
        <div className='price_save_container' >
          <div className='price_container' >{price} $ </div>
          <div ref={saveRef} className='save_icon_container'
           onClick={()=>{
              saveRef.current.classList.toggle('save_icon')
           }}
          ><BsBookmarkStar/></div>
        </div>
        <div className='add_detail_container' >
          <div className='details_container' >Details</div>
          <div ref={addCardRef} className='add_card_container'
            onClick={()=>{
              addCardRef.current.classList.toggle('display');
              negRef.current.classList.toggle('neg_display');
            }}
          
          >Add to cart</div>
          <div ref={negRef} className='neg_pos_container' >
           <div className='neg_container'
             onClick={()=>{
              addCardRef.current.classList.toggle('display');
              negRef.current.classList.toggle('neg_display');
            }}
           > <CgRemoveR/> </div>
           <div className='num_container' >5</div>
           <div className='pos_container' > <GoDiffAdded/> </div>
          </div>
        </div>
      </div>
   )
}
