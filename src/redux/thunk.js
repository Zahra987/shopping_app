import {loadProductsSuccess} from './actions';

export const loadProducts = () => async (dispatch, getState) => {

  try{
    //dispatch(reqStart());
  const response = await fetch('https://fakestoreapi.com/products')
  const allData = await response.json();
  console.log(allData);
  
  dispatch(loadProductsSuccess(allData));
  } catch (e) {
    //dispatch(reqFailed());
    dispatch(errAlert(e));
  }
}




const errAlert = () => () => {
  alert(`ERROR`);
}