import { combineReducers } from 'redux';
import pizzas from './pizzasReducer';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offer from './offerReducer';
import update from './updateCartReducer';

export default combineReducers({
    pizzas, pizza, order, offer, update
})
