import React from 'react';
import { useEffect } from 'react';
import '../../Css/store.css';
import Card from '../Card';
import { useDispatch ,useSelector} from 'react-redux';
import { loadProducts } from '../../redux/thunk';

export default function Store() {

const dispatch = useDispatch();
const products = useSelector((state) => state.productsReducer);

useEffect(()=>{
dispatch(loadProducts());
},[])

  return (
   <main>
     <section className='cards_container' >
      {products.map((product,index) => <Card product={product} key={index} />)}
     </section>
   </main>
  )}