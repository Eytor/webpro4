import React from 'react';
import { connect } from 'react-redux';
import Cart from '../Cart/Cart';


class MenuCart extends React.Component {


    render() {
        const { theCart} = this.props;
        console.log(theCart)
        return (
            <div className="container">
                {theCart.map(p => <Cart key={p.id} cart={p} />)}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
         theCart: state.update.arr
     }
}

export default connect(mapStateToProps, null)(MenuCart);
