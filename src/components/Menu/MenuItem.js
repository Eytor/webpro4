import React from 'react';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getOnePizza } from '../../actions/pizzaActions';

class MenuItem extends React.Component {
    componentDidMount() {
        const { getOnePizza } = this.props;
        const { pizzaId } = this.props.match.params;
        getOnePizza(pizzaId);
    }
    render() {
        const { pizza } = this.props;
        return (
            <div className="container">
                <Pizza key={pizza.id} pizza={pizza} />
            </div>
        );
    }
};

const mapStateToProps = ({ pizza }) => {
    return { pizza }
}

export default connect(mapStateToProps, { getOnePizza })(MenuItem);
