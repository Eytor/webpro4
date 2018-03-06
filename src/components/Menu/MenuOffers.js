import react from 'react';
import { connect } from 'react-redux';
import Offers from '../Offers/Offers';
import { getOffers } from '../../actions/pizzaActions';

class MenuOffers extends react-Component {
  componentDidMount() {
      const { getOffers } = this.props;
      getOffers();
  }
  render() {
      const { offer } = this.props;
      return (
          <div className="container">
              {offer.map(p => <Offer key={p.id} offer={p} />)}
          </div>
      );
  }
};

const mapStateToProps = ({ offer }) => {
  return { offer }
}

export default connect(mapStateToProps, { getOffers })(MenuOffers);
}
