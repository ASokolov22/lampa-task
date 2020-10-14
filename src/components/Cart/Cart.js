import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {goodsListActions} from '../../actions';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/Header';
import CartItem from '../CartItem/CartItem';
import OrderForm from '../OrderForm/OrderForm';

class CartComponent extends Component {

    onSubmitForm = (values) => {
        console.log('Values', values);
    };

    render(){
        let {goods, totalValue} = this.props;
        const {getAllGoodsFromStorage, addToCart, removeFromCart} = this.props;
        if(!goods.length){
            goods = getAllGoodsFromStorage();
        }
        if(!totalValue){
            totalValue = localStorage.getItem('totalValue');
        }
        return (
            <main>
                <HeaderComponent/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                            <OrderForm onSubmit={this.onSubmitForm}/>
                        </div>
                        <div className="col-md-8 order-md-1">
                            {goods.length && goods.map((item) => {
                                return item.isInCart ? <CartItem
                                    key={item.id}
                                    item={item}
                                    addToCart={() => addToCart(item, totalValue, goods)}
                                    removeFromCart={() => removeFromCart(item, totalValue, goods)}/> : null
                            })}
                            <div>
                                {totalValue > 0 ? <span>TOTAL: ${totalValue} UAH</span>
                                    : <span>The cart is empty</span>}

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const connectedCartComponent = connect(state => {
    const {goods} = state.goodsList;
    const {totalValue} = state.cart;
    return {
        goods,
        totalValue,
    }
}, {
    getAllGoodsFromStorage: goodsListActions.getAllGoodsFromStorage,
    addToCart: goodsListActions.addToCart,
    removeFromCart: goodsListActions.removeFromCart,
})(CartComponent);
export default CartComponent = connectedCartComponent;
