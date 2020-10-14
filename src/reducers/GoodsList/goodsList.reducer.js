import {goodsListConstants} from '../../constants';
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
        default:
            return state
    }
}
