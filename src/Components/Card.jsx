import React,{useEffect} from 'react';
import { useRef } from 'react';
import {BsBookmarkStar} from 'react-icons/bs';
import {CgRemoveR} from 'react-icons/cg';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {GoDiffAdded} from 'react-icons/go';
import '../Css/navbar.css';
import { useDispatch ,useSelector} from 'react-redux';
import { addToCart, decreasePurchases, increasePurchases, savedProduct, unSavedProduct} from '../redux/actions';


export default function Card(props) {
  const {id,image,category,price}=props.product;
  const addCardRef = useRef();
  const negRef = useRef();
  const saveRef = useRef();
  const dispatch = useDispatch();
  let item =[];
  const state= useSelector(state => state.cartReducer);
  item = state.filter(i => i.product.id == id);
  let ite =[];
  const stat= useSelector(state => state.savedReducer);
  ite = stat.filter(i => i.product.id == id);

  useEffect(()=>{
    if(item.length > 0){
      addCardRef.current.classList.add('second-display');
      negRef.current.classList.add('neg_display');
    } else{addCardRef.current.classList.add('add_card_container');}
    if (ite.length > 0) {saveRef.current.classList.add('save_icon');}
  },[])

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
              saveRef.current.classList.toggle('save_icon');
              if (ite.length > 0) {
                console.log('onclick1');
                dispatch(unSavedProduct(id))
                
                
              }else{
                console.log('onclick2');
                dispatch(savedProduct(props.product))
              }
           }}
          ><BsBookmarkStar/></div>
        </div>
        <div className='add_detail_container' >
          <div className='details_container' >Details</div>
          <div ref={addCardRef}
              onClick={()=>{
                 dispatch(addToCart(props.product));
                 addCardRef.current.classList.toggle('second-display');
                 negRef.current.classList.toggle('neg_display');
               }}
         
           >Add to cart</div>
         <div ref={negRef} className='neg_pos_container' >
          <div className='neg_container'
                onClick={()=>{
                 if(item[0].numberOfPurchases == 1){
                  addCardRef.current.classList.toggle('second-display');
                  addCardRef.current.classList.add('add_card_container');
                  negRef.current.classList.toggle('neg_display');
                }
              dispatch(decreasePurchases(item[0].product.id , item[0].numberOfPurchases));
              }}
           > { item.length > 0 && item[0].numberOfPurchases == 1 ? <RiDeleteBin5Line/> : <CgRemoveR/>} </div>
          <div className='num_container' >{ item.length > 0 ? item[0].numberOfPurchases : 0 }</div>
          <div className='pos_container'
               onClick={()=>{
                dispatch(increasePurchases(item[0].product.id , item[0].numberOfPurchases));
                }}
          > <GoDiffAdded/> </div>
         </div>
       </div>
      </div>
   )
}
