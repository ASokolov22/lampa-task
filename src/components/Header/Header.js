import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './Header.css';

class HeaderComponent extends Component{

    render(){
        const {label} = this.props;
        const history = createBrowserHistory();

        return(
            <header>
                <div className="navbar navbar-dark bg-dark text-white shadow-sm">
                    <div className="container d-flex justify-content-between">
                        {label}
                        <div>
                            <span>155$</span>
                            <Link to="/cart"
                                  className="fa fa-shopping-cart text-success"
                            />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const connectedHeaderComponent = connect(state => {
    const {label} = state.cart;
    return {
        label,
    }
}, {

})(HeaderComponent);

export default HeaderComponent = connectedHeaderComponent;