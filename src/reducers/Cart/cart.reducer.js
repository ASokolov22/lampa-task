import {goodsListConstants} from '../../constants';

const initialState = {
    label: 'Redux',
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
        default:
            return state
    }
}