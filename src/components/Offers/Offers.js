import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Offers = ({ theOffer }) => {
    const { id, offer, price, validity } = theOffer;
    return (
        <div className="offer-wrapper">
            <Link to={`/offers/${id}`}><h2 className="offer-description">{offer}</h2></Link>
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
