import React from 'react';
import { Link } from 'react-router-dom';

const Delivery = () => {
    return (
        <div className="delivery-container">
            <h3>Veldu Afhendingarmáta.</h3>
            <Link to="/" className="deliver-button">Sækja</Link>
            <h3>eða</h3>
            <Link to="/" className="deliver-button">Senda</Link>
        </div>
    );
};

export default Delivery;
