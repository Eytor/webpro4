import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBarLinkWrapper = ({ children }) => {
    return (
        <div className="navLinks">
            {children}
        </div>
    );
};

export default NavigationBarLinkWrapper;
