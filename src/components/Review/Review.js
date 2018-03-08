import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Review extends React.Component {
    render() {
        const { theCart } = this.props;
        var price = 0;
        for (var i = 0; i < theCart.length; i++) {
            price += theCart[i].price;
        }
        console.log(price);
        return (
            <div className="container">
                <h2>Review order</h2>
                <ul>{ theCart.map(function(theCart, index) {
            		return <li key={ index }> <div className="review-pizza-name">{theCart.name}</div> <div className="review-pizza-price">{theCart.price} kr.</div></li>;
          		}) }</ul>
                <h3 className="price">{price} kr.</h3>
                <Link to='/confirmed' className="checkout-button">Confirm</Link>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        theCart: state.update.arr
    }
}

export default connect(mapStateToProps, null)(Review);
