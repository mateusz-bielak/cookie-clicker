import React from 'react';
import PropTypes from 'prop-types';
import Building from './Building';
import BuildingInfo from './BuildingInfo';
import buildings from '../settings/buildings';

class StorePanel extends React.Component {
  state = {
    producentInfo: {},
  }

  getInfoPanel = (stats) => {
    this.setState(() => ({
      producentInfo: stats,
    }));
  }

  hideInfoPanel = () => {
    const producentInfo = { ...this.state.producentInfo };
    producentInfo.onHover = false;
    this.setState({ producentInfo });
  }

  render() {
    return (
      <div className="store_panel">
        <h1 className="store_panel__header">Store</h1>
        <div className="store_panel__buildings" onMouseLeave={this.getInfoPanel}>
          <div className="store_panel__separator">
            <span>Buildings</span>
          </div>
          { buildings.map(building => (<Building
            key={building.name}
            data={building}
            cookiesAmount={this.props.cookiesAmount}
            buildingBought={this.props.buildingBought}
            getInfoPanel={this.getInfoPanel}
          />)) }
        </div>
        <BuildingInfo producentInfo={this.state.producentInfo} />
      </div>
    );
  }
}

StorePanel.propTypes = {
  cookiesAmount: PropTypes.number.isRequired,
  buildingBought: PropTypes.func.isRequired,
};

export default StorePanel;
