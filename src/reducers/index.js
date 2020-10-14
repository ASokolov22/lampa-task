import {combineReducers} from 'redux';
import {cart} from './Cart/cart.reducer';
import {goodsList} from './GoodsList/goodsList.reducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    cart,
    goodsList,
    form: formReducer
});

export default rootReducer;