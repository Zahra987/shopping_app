import { LOAD_PRODUCTS_IN_PROGRESS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE } from "./actions";


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




export  const reducers = {loadingReducer,
  productsReducer,
};