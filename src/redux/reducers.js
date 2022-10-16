import { LOAD_PRODUCTS_IN_PROGRESS, LOAD_PRODUCTS_SUCCESS, ADD_TO_CART, DECREASE_PURCHASES, INCREASE_PURCHASES, SAVED_PRODUCT, UNSAVED_PRODUCT,SAVED } from "./actions";

// loading products
export const loadingReducer= (state=false, action) => {
 const {type} = action;
 switch (type) {
  case LOAD_PRODUCTS_IN_PROGRESS:{
    return true;
  }
  case LOAD_PRODUCTS_SUCCESS:
  case LOAD_PRODUCTS_IN_PROGRESS:{
    return false;
  }
  default:
    return state;
 }
}

export const productsReducer= (state=[], action) => {
  const {type,payload} = action;
  switch (type) {
   case LOAD_PRODUCTS_SUCCESS:
    return payload;
   default:
     return state;
  }
 }
// add to cart
export const cartReducer= (state=[], action) => {
  const {type,payload} = action;
  switch (type) {
    case ADD_TO_CART:{
      state =state.concat(payload);
      return state;
    }
    case DECREASE_PURCHASES:{
      if (payload.num == 1){
        return state.filter(item => item.product.id != payload.id);
      }
      return state.map((item,index) => {
        if(item.product.id == payload.id){
          return {
            product: item.product,
            numberOfPurchases: payload.num - 1
          }
        }else return item;
      })
    }
    case INCREASE_PURCHASES:{
      return state.map((item,index) => {
        if(item.product.id == payload.id){
          return {
            product: item.product,
            numberOfPurchases: payload.num + 1
          }
        }else return item;
      })
    }
    default:
      return state;
   }
}
 // saved reducer
 export const savedReducer= (state=[], action) => {
  const {type,payload} = action;
  switch (type) {
   case SAVED_PRODUCT:{
    const a = state.concat(payload)
    return state.concat(payload);
   }
   case UNSAVED_PRODUCT:{
    return state.filter(item => item.product.id != payload.id)
   }
   default:
     return state;
  }
 }


export  const reducers = {loadingReducer,
  productsReducer,cartReducer, savedReducer
};