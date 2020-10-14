import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Link} from 'react-router-dom';

import './Header.css';

class HeaderComponent extends Component{

    render(){
        const url = window.location.pathname;
        const {totalValue} = this.props;
        const storageValue = localStorage.getItem('totalValue');

        return(
            <header>
                <div className="navbar navbar-light bg-light shadow-sm">
                    <div className="container d-flex justify-content-between">
                        {url === '/' ? 'Goods list' : 'Cart'}
                        <div>
                            {url === '/' && <span>{totalValue > 0 ? totalValue + ' UAH'
                                : storageValue > 0 ? storageValue + ' UAH'
                                : ''}</span>}
                            {url === '/' ?
                                <Link to="/cart"
                                      className="fa fa-shopping-cart text-success"
                                /> :
                                <Link to="/"
                                      className="btn btn-sm btn-outline-secondary"
                                >Go back</Link>}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const connectedHeaderComponent = connect(state => {
    const {totalValue} = state.cart;
    return {
        totalValue
    }
}, {

})(HeaderComponent);

export default HeaderComponent = connectedHeaderComponent;