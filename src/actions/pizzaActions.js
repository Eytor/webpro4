import { GET_ALL_PIZZAS, GET_ONE_PIZZA } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';

export const getAllPizzas = () => {
    return dispatch => fetch('http://localhost:3500/api/pizzas').then(json => json.json()).then(data => dispatch(getAllPizzaSuccess(data)))
};

export const getOnePizza = (id) => {
    return dispatch => fetch('http://localhost:3500/api/pizzas/' + id).then(json => json.json()).then(data => dispatch(getOnePizzaSuccess(data)))
};



const getAllPizzaSuccess = (pizzas) => {
    return {
        type: GET_ALL_PIZZAS,
        payload: pizzas
    };
};

const getOnePizzaSuccess = (pizza) => {
    return {
        type: GET_ONE_PIZZA,
        payload: pizza
    };
};
