import React from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../actions/orderActions';

class Confirmed extends React.Component {
    render() {
        const { theCart } = this.props;
        console.log(theCart);
        submitOrder(theCart);
        return (
            <div className="container">
                <h2>Pizzas in the oven</h2>
            </div>
        );
    }

};


const mapStateToProps = (state) => {
    return {
        theCart: state.update.arr
    }
}

export default connect(mapStateToProps, null)(Confirmed);
