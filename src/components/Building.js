import React from 'react';
import PropTypes from 'prop-types';

class Building extends React.Component {
  state = {
    amount: 0,
    cost: this.props.data.initialCost,
    cookiesPerSecond: this.props.data.productionPerSecond,
  }

  buyBuilding = () => {
    if (this.props.cookiesAmount < this.state.cost) return;
    this.setState(prevState => ({
      amount: prevState.amount + 1,
    }), () => {
      const cookiesPerSecond = this.state.amount * this.state.cookiesPerSecond;
      this.props.buildingBought(this.state.cost, cookiesPerSecond);
    });
  }

  render() {
    const {
      name, initialCost,
    } = this.props.data;
    return (
      <button className="store_panel__building" onClick={this.buyBuilding}>
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
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  cookiesAmount: PropTypes.number.isRequired,
  buildingBought: PropTypes.func.isRequired,
};

export default Building;
