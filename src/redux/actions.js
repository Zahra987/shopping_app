
//reguest actions
export const LOAD_PRODUCTS_IN_PROGRESS='LOAD_PRODUCTS_IN_PROGRESS';
export const loadProductsInProgress= () => ({
  type: LOAD_PRODUCTS_IN_PROGRESS
})

export const LOAD_PRODUCTS_SUCCESS='LOAD_PRODUCTS_SUCCESS';
export const loadProductsSuccess= (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload:products
})

export const LOAD_PRODUCTS_FAILURE='LOAD_PRODUCTS_FAILURE';
export const loadProductsfailure= () => ({
  type: LOAD_PRODUCTS_FAILURE
})

//cart actions
export const ADD_TO_CART ='ADD_TO_CART';
export const addToCart=(product)=>({
  type: ADD_TO_CART,
  payload: {
    product,
    numberOfPurchases: 1
  }
})
 
export const DECREASE_PURCHASES = 'DECREASE_PURCHASES';
export const decreasePurchases = (id, num) => ({
  type: DECREASE_PURCHASES,
  payload: {id, num}
})

export const INCREASE_PURCHASES = 'INCREASE_PURCHASES';
export const increasePurchases = (id, num) => ({
  type: INCREASE_PURCHASES,
  payload: {id, num}
})

export const SAVED_PRODUCT ='SAVED_PRODUCT';
export const savedProduct=(product)=>({
  type: SAVED_PRODUCT,
  payload: {
    product,
    save: true
  }
})

export const UNSAVED_PRODUCT ='UNSAVED_PRODUCT';
export const unSavedProduct=(id)=>({
  type: UNSAVED_PRODUCT,
  payload: {id}
})

