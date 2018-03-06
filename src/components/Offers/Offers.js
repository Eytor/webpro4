import React from 'react';
import { PropTypes } from 'prop-types';

const Offers = ({ theOffer }) => {
    const { offer, price, validity } = theOffer;
    return (
        <div className="offer-wrapper">
            <div className="offer-description">{offer}</div>
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
