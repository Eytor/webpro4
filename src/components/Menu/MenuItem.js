import React from 'react';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getOnePizza } from '../../actions/pizzaActions';
import { updateCart } from '../../actions/updateActions';

class MenuItem extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { getOnePizza } = this.props;
        const { pizzaId } = this.props.match.params;
        getOnePizza(pizzaId);
    }

    handleClick(e) {
        this.props.updateCart(e);
    }

    render() {
        const { pizza } = this.props;
        return (
            <div className="container">
                <Pizza key={pizza.id} pizza={pizza} />
                <button type="button" onClick={ () => this.handleClick(pizza)}>ADD TO CART</button>
            </div>

        );
    }

};

const mapStateToProps = ({ pizza }) => {
    return { pizza }
}

export default connect(mapStateToProps, { getOnePizza,updateCart })(MenuItem);
