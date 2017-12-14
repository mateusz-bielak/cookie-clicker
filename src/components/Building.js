import React from 'react';
import PropTypes from 'prop-types';
import smallCookie from '../img/perfectCookie-small.png';

class Building extends React.Component {
  state = {
    amount: 0,
    buttonClass: 'store_panel__building',
    cost: this.props.data.initialCost,
    cookiesPerSecond: this.props.data.productionPerSecond,
    isShown: false,
  }

  componentWillReceiveProps = () => {
    const hiddenButtonClass = 'store_panel__building store_panel__building--hidden';
    if (
      this.props.cookiesAmount < this.state.cost &&
      hiddenButtonClass !== this.state.buttonClass
    ) {
      // console.log('no');
      this.setState(() => ({
        buttonClass: hiddenButtonClass,
        isShown: false,
      }));
    } else if (
      this.props.cookiesAmount >= this.state.cost &&
      hiddenButtonClass === this.state.buttonClass
    ) {
      // console.log('yes');
      this.setState(() => ({
        buttonClass: 'store_panel__building',
        isShown: true,
      }));
    }
  }

  onMouseDown = () => {
    if (!this.state.isShown) return;
    this.setState(() => ({
      buttonClass: 'store_panel__building--clicked',
    }));
  }

  onMouseUp = () => {
    if (!this.state.isShown) return;
    this.setState(() => ({
      buttonClass: 'store_panel__building',
    }));
  }

  buyBuilding = () => {
    if (this.props.cookiesAmount < this.state.cost) return;
    this.setState(prevState => ({
      amount: prevState.amount + 1,
    }), () => {
      this.props.buildingBought(this.state.cost, this.state.cookiesPerSecond);
      this.increaseCost();
    });
  }

  increaseCost = () => {
    this.setState(prevState =>
      ({ cost: Math.floor(prevState.cost * 1.15) }));
  }

  render() {
    return (
      <button
        className={this.state.buttonClass}
        onClick={this.buyBuilding}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        <div>
          <p className="store_panel__building_name">{this.props.data.name}</p>
          <p className="store_panel__building_cost">
            <img src={`./public/${smallCookie}`} alt="Cookie.png" />
            {` ${this.state.cost}`}
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
