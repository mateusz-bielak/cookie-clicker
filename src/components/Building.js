import React from 'react';
import PropTypes from 'prop-types';

class Building extends React.Component {
  state = {
    amount: 0,
  }

  render() {
    const {
      name, initialCost,
    } = this.props.data;
    return (
      <button className="store_panel__building">
        <div>
          <p className="store_panel__building_name">{name}</p>
          <p className="store_panel__building_cost">
            <img src="https://dummyimage.com/14x14/906734/fff.png" alt="Cookie.png" />
            {` ${initialCost}`}
          </p>
        </div>
        <p className="store_panel__building_amount">{this.state.amount}</p>
      </button>
    );
  }
}

Building.propTypes = {
  data: PropTypes
    .objectOf(PropTypes
      .oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])).isRequired,
};

export default Building;
