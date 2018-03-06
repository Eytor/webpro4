import { GET_ALL_PIZZAS, GET_ONE_PIZZA, GET_OFFERS } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';

export const getAllPizzas = () => {
    return dispatch => fetch('http://localhost:3500/api/pizzas').then(json => json.json()).then(data => dispatch(getAllPizzaSuccess(data)))
};

export const getOnePizza = (id) => {
    return dispatch => fetch('http://localhost:3500/api/pizzas/' + id).then(json => json.json()).then(data => dispatch(getOnePizzaSuccess(data)))
};

export const getOffers = () => {
  return dispatch => fetch('http://localhost:3500/api/offers').then(json => json.json()).then(data => dispatch(getOffersSuccess(data)))
}

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

const getOffersSuccess = (offers) => {
  return {
      type: GET_OFFERS,
      payload: offers
  };
};
