import React from 'react';
import {Router} from 'react-router';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {base} from '../../base';
import './App.css';

import GoodsList from '../GoodsList/GoodsList';
import CartComponent from '../Cart/Cart';

function App() {
  return (
    <div className="App">
        <BrowserRouter history={createBrowserHistory()}>
            <Switch>
                <Route exact path='/' component={GoodsList}/>
                <Route path='/cart' component={CartComponent}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
