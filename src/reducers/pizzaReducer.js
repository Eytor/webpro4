import { GET_ALL_PIZZAS, GET_ONE_PIZZA } from '../constants/pizzaConstants';

const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PIZZAS:
            return action.payload;
            break;
        case GET_ONE_PIZZA:
            return action.payload;
            break;
        default: return state;

    }
};

export default pizzaReducer;
