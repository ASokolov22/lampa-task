import {goodsListConstants, cartConstants} from '../../constants';

const initialState = {
    totalValue: 0,
};

export function cart(state = initialState, action){

    switch(action.type){
        case goodsListConstants.ADD_TO_CART: {
            return {
                ...state,
                totalValue: action.payload.totalValue,
            }
        }
        case goodsListConstants.REMOVE_FROM_CART: {
            return {
                ...state,
                totalValue: action.payload.totalValue,
            }
        }
        case cartConstants.SEND_ORDER:
            return initialState;
        default:
            return state
    }
}