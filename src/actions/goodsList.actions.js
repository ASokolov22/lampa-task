import {goodsListConstants} from '../constants';
import {goodsListService} from '../services';

export const goodsListActions = {
    getAllGoods,
};

function getAllGoods(){

    return dispatch => {
        main(dispatch);
    };

    function main(dispatch) {
        dispatch(request());
        goodsListService
            .getAllGoods()
            .then(goods => {
                dispatch(success(goods.data));
            })
            .catch(error => {
                dispatch(failure(error));
            });
        function request() {
            return {
                type: goodsListConstants.GET_ALL_GOODS_REQUEST
            }
        }
        function success(goods) {
            console.log('Photos', goods);
            return {
                type: goodsListConstants.GET_ALL_GOODS_SUCCESS,
                payload: {
                    goods
                }
            }
        }
        function failure(error) {
            return {
                type: goodsListConstants.GET_ALL_GOODS_ERROR,
                payload: {
                    error
                }
            }
        }
    }
}