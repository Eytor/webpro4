import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import MenuOffers from './components/Menu/MenuOffers';
import cart from './components/Menu/MenuCart';
import Delivery from './components/Delivery/Delivery';

const App = () => {
    return (
        <div>
            <NavigationBar logoImageUrl='http://icons.iconarchive.com/icons/icons8/ios7/256/Food-Pizza-icon.png' />

            <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/cart" component={cart} />
                <Route path="/about" component={About} />
                <Route path="/offers" component={MenuOffers} />
                <Route path="/delivery" component={Delivery} />
                <Route path="/:pizzaId" component={MenuItem} />
            </Switch>
        </div>
    );
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));
