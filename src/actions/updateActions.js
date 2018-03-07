import{ UPDATE_CART } from '../constants/orderConstants';

export const updateCart = (cart) => {
    console.log(cart);
    return {
        type: UPDATE_CART,
        payload: cart
    };
};
