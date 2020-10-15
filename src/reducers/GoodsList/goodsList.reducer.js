import {goodsListConstants, cartConstants} from '../../constants';
const initialState = {
    goods: []
};

export function goodsList(state = initialState, action){
    switch(action.type){
        case goodsListConstants.GET_ALL_GOODS_SUCCESS: {
            return {
                ...state,
                goods: action.payload.goods,
            }
        }
        case goodsListConstants.GET_ALL_GOODS_FROM_STORAGE: {
            return {
                ...state,
                goods: action.payload.goods,
            }
        }
        case goodsListConstants.ADD_TO_CART: {
            return {
                ...state,
                goods: action.payload.goods,
            }
        }

        case goodsListConstants.REMOVE_FROM_CART: {
            return {
                ...state,
                goods: action.payload.goods,
            }
        }
        case cartConstants.SEND_ORDER:
            return initialState;
        default:
            return state
    }
}
