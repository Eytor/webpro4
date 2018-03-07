import React from 'react';
import { PropTypes } from 'prop-types';

const Offers = ({ theOffer }) => {
    const { offer, price, validity } = theOffer;
    return (
        <div className="offer-wrapper">
            <h2 className="offer-description">{offer}</h2>
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
