import { GET_OFFERS } from '../constants/pizzaConstants';

const offerReducer = (state = [], action) => {
    switch (action.type) {
        case GET_OFFERS:
            return action.payload;
            break;
        default: return state;
    }
};

export default offerReducer;
