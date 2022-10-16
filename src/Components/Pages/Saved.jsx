import React from 'react';
import { useSelector } from 'react-redux';
import '../../Css/store.css';
import Card from '../Card';
import Vacant from '../Vacant';

export default function Saved() {
  const savedProducts = useSelector(state => state.savedReducer);

  return (
   <>
    {(savedProducts.length == 0) ? <Vacant message='هنوز ذخیره نکرده اید' /> :
      <main>
        <section className='cards_container' >
         {
          savedProducts.map((item,index) => <Card product={item.product} key={index}/>)
         }
        </section>
      </main>
     }
   </>
  )}
