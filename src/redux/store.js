import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const middleWare = [thunk, promiseMiddleware];


  let store = createStore(allReducers, applyMiddleware(...middleWare));
  export default  store;