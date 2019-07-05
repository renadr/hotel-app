import { createStore, combineReducers } from 'redux';
import addToCart from './reducers/cartRecucer';
import personnalInfos from './reducers/account';

const rootReducer = combineReducers({ addToCart, personnalInfos });
const store = createStore(rootReducer);
export default store;
