import React from 'react';
import { PropTypes } from 'prop-types';
//import { Link } from 'react-router-dom';

const Offers = ({ offer }) => {
    const {offers, price, validity } = offer;
    return (
        <div className="offer-wrapper">
            <div className="offer-description">{offers}</div>
            <div className="offer-price">{price}</div>
            <div className="offer-validity">{validity}</div>
        </div>
    );
};

Offers.propTypes = {
    offer: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default Offers;
