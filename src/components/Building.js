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
      <div>
        <p>{name}</p>
        <p>{initialCost}</p>
        <p>{this.state.amount}</p>
      </div>
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
