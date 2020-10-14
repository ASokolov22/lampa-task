import React, {Component} from 'react';
import {goodsListActions} from '../../actions';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/Header';

class GoodsList extends Component {

    componentDidMount(){
        const {getAllGoods, getAllGoodsFromStorage} = this.props;

        localStorage.getItem('goods') ? getAllGoodsFromStorage() : getAllGoods();
    }

    renderGoods = goods => {
        let {totalValue} = this.props;
        if(!totalValue){
            totalValue = +localStorage.getItem('totalValue');
        }
        const {addToCart, removeFromCart} = this.props;
        return (
            goods.map(item => (
                <div className="col-md-4" key={item.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={item.thumbnailUrl} alt={item.id}/>
                        <div className="card-body">
                            <p className="card-text">{item.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() => addToCart(item, totalValue, goods)}
                                    >Add</button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                        disabled={!item.isInCart}
                                        onClick={() => removeFromCart(item, totalValue, goods)}
                                    >Remove</button>
                                </div>
                                <small className="text-muted">{item.price} UAH</small>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    };

    render(){
        const {goods} = this.props;
        const {renderGoods} = this;

        return (
            <div>
                <HeaderComponent/>
                <main role="main">
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                {renderGoods(goods)}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

const connectedGoodsList = connect(state => {
    const {goods} = state.goodsList;
    const {totalValue, orderedItems} = state.cart;
    return {
        goods,
        totalValue,
        orderedItems,
    }
}, {
    getAllGoods: goodsListActions.getAllGoods,
    getAllGoodsFromStorage: goodsListActions.getAllGoodsFromStorage,
    addToCart: goodsListActions.addToCart,
    removeFromCart: goodsListActions.removeFromCart,
})(GoodsList);

export default GoodsList = connectedGoodsList;
