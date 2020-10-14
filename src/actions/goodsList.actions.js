import {goodsListConstants} from '../constants';
import {goodsListService} from '../services';

export const goodsListActions = {
    getAllGoods,
    addToCart,
    removeFromCart,
    getAllGoodsFromStorage,
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
            const prices = [100, 120, 140, 160, 180, 200];
            const result = goods.map((item, i) => {
                return {
                    ...item,
                    price: prices[i],
                    isInCart: 0,
                }
            });

            localStorage.setItem('goods', JSON.stringify(result));

            return {
                type: goodsListConstants.GET_ALL_GOODS_SUCCESS,
                payload: {
                    goods: result
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

function addToCart(item, totalValue, goods){
    const resultPrice = item.price + +totalValue;

    const idx = goods.findIndex((el) => el.id === item.id);
    const oldItem = goods[idx];
    const newItem = {
        ...oldItem,
        isInCart: oldItem.isInCart + 1
    };
    const goodsResult = [
        ...goods.slice(0, idx),
        newItem,
        ...goods.slice(idx + 1)
    ];

    localStorage.setItem('goods', JSON.stringify(goodsResult));
    localStorage.setItem('totalValue', resultPrice);

    return {
        type: goodsListConstants.ADD_TO_CART,
        payload: {
            totalValue: resultPrice,
            goods: goodsResult
        }
    }
}

function removeFromCart(item, totalValue, goods){
    const resultPrice = +totalValue - item.price;

    const idx = goods.findIndex((el) => el.id === item.id);
    const oldItem = goods[idx];
    const newItem = {
        ...oldItem,
        isInCart: oldItem.isInCart - 1
    };
    const goodsResult = [
        ...goods.slice(0, idx),
        newItem,
        ...goods.slice(idx + 1)
    ];

    localStorage.setItem('goods', JSON.stringify(goodsResult));
    localStorage.setItem('totalValue', resultPrice);

    return {
        type: goodsListConstants.REMOVE_FROM_CART,
        payload: {
            totalValue: resultPrice,
            goods: goodsResult
        }
    }
}

function getAllGoodsFromStorage(){
    const goods = JSON.parse(localStorage.getItem('goods'));

    return {
        type: goodsListConstants.GET_ALL_GOODS_FROM_STORAGE,
        payload: {
            goods
        }
    }
}