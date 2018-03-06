import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink,Link } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';
// http://simpleicon.com/wp-content/uploads/Shopping-Cart-11-256x256.png
const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to='/'><img src={logoImageUrl} alt="" height="42" width="42"/></Link>
            </div>
            <NavigationBarLinkWrapper>
                <NavLink exact to="/" activeClassName="active" className="navLink">Pizzas</NavLink>
                <NavLink to="/offers" activeClassName="active" className="navLink">Offers</NavLink>
                <NavLink to="/about" activeClassName="active" className="navLink">About us</NavLink>
                <NavLink to="/cart" activeClassName="active" className="navLink">Cart</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};


NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};
export default NavigationBar;
