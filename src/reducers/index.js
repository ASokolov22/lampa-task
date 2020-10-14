import {combineReducers} from 'redux';
import {cart} from './Cart/cart.reducer';
import {goodsList} from './GoodsList/goodsList.reducer';


const rootReducer = combineReducers({
    cart,
    goodsList
});

export default rootReducer;