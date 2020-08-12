import { combineReducers } from 'redux';
import { AppReducer } from './AppReducer';
import { SearchReducer } from './SearchReducer.js';

export default combineReducers({
    AppReducer,
    SearchReducer,
})