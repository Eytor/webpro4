import React from 'react';
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const { id, name, description, price, image } = cart;
    return (
        <div className="pizza-wrapper">
            <Link to={`/${id}`}><div className="pizza-image">
                <img src={image} alt=""/>
            </div></Link>
            <Link to={`/${id}`}><div className="pizza-name">{name}</div></Link>
            <div className="pizza-description">{description}</div>
            <div className="pizza-price">{price} kr.</div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

export default Cart;
