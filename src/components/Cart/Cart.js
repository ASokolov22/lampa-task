import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {goodsListActions, cartActions} from '../../actions';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/Header';
import CartItem from '../CartItem/CartItem';
import OrderForm from '../OrderForm/OrderForm';
import EmtyCardLogo from '../../images/empty-card.png';

import './Cart.css';

class CartComponent extends Component {

    onSubmitForm = (user) => {
        const {goods, sendOrder} = this.props;
        const goodsToSend = goods.filter(item => {
            return item.isInCart > 0;
        });
        sendOrder(user, goodsToSend);
    };

    render(){
        let {goods, totalValue} = this.props;
        const {getAllGoodsFromStorage, addToCart, removeFromCart} = this.props;
        if(goods && !goods.length){
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
                        <div className="col-md-4 order-md-2 mb-4 cart-order-form">
                            <OrderForm onSubmit={this.onSubmitForm}/>
                        </div>
                        <div className="col-md-8 order-md-1 cart-items">
                            {goods && goods.length && goods.map((item) => {
                                return item.isInCart ? <CartItem
                                    key={item.id}
                                    item={item}
                                    addToCart={() => addToCart(item, totalValue, goods)}
                                    removeFromCart={() => removeFromCart(item, totalValue, goods)}/> : null
                            })}
                            <div>
                                {totalValue > 0 ? <span>TOTAL: ${totalValue} UAH</span>
                                    : <img className="empty-card" src={EmtyCardLogo} alt="empty card"/>}

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
    sendOrder: cartActions.sendOrder,
})(CartComponent);
export default CartComponent = connectedCartComponent;
