import React, {Component} from 'react';
import {goodsListActions} from '../../actions';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/Header';

class GoodsList extends Component {

    componentDidMount(){
        const {getAllGoods} = this.props;
        getAllGoods();
    }

    renderGoods = goods => {

        return (
            goods.map(item => (
                <div className="col-md-4" key={item.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={item.thumbnailUrl} alt={item.id}/>
                        <div className="card-body">
                            <p className="card-text">{item.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
                                </div>
                                <small className="text-muted">9 mins</small>
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
    return {
        goods,
    }
}, {
    getAllGoods: goodsListActions.getAllGoods,
})(GoodsList);

export default GoodsList = connectedGoodsList;
