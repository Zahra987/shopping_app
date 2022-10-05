import { createStore,applyMiddleware } from 'redux';
import {rootReducer} from './rootReducer';
import thunk from 'redux-thunk';
export const configureStore= () => createStore(rootReducer,applyMiddleware(thunk));