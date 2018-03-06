import React from 'react';
import { connect } from 'react-redux';
import Offers from '../Offers/Offers';
import { getOffers } from '../../actions/pizzaActions';

class MenuOffers extends React.Component {
    componentDidMount() {
        const { getOffers } = this.props;
        getOffers();
    }
  render() {
      const { offer } = this.props;
      console.log(offer);
      return (
          <div className="container">
              {offer.map(o => <Offers key={o.id} theOffer={o} />)}
          </div>
      );
  }
};

const mapStateToProps = ({ offer }) => {
    return { offer }
}

export default connect(mapStateToProps, { getOffers })(MenuOffers);
