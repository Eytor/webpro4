import { GET_OFFERS } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';

export const getOffers = () => {
    return dispatch => fetch('http://localhost:3500/api/offers/').then(json => json.json()).then(data => dispatch(getOffersSuccess(data)))
};

const getOffersSuccess = (offers) => {
    return {
        type: GET_OFFERS,
        payload: offers
    };
};
