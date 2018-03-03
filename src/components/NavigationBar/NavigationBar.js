import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to='/'><img src={logoImageUrl} alt="" height="42" width="42"/></Link>
            </div>        
        </nav>
    );
};


NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};
export default NavigationBar;
