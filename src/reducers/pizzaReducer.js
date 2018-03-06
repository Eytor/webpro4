import { GET_ALL_PIZZAS, GET_ONE_PIZZA, GET_OFFERS } from '../constants/pizzaConstants';

const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PIZZAS:
            return action.payload;
            break;
        case GET_ONE_PIZZA:
            return action.payload;
            break;
        default: return state;
        case GET_OFFERS:
          return action.payload;
          break;

    }
};

export default pizzaReducer;
