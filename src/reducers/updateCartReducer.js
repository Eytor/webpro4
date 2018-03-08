import { UPDATE_CART } from '../constants/orderConstants';

const initialUserState = {
    arr:[]
}

const updateCartReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case UPDATE_CART:
            console.log(action.payload);
            return {
                ...state,
                arr:[...state.arr, action.payload],
            }
            break;
        default: return state
    }
}

export default updateCartReducer;
