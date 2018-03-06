import { GET_ALL_PIZZAS } from '../constants/pizzaConstants';


const PizzasReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PIZZAS:
        return action.payload;
        break;
    default: return state;

  }
};

export default PizzasReducer;
