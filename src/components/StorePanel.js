import React from 'react';
import PropTypes from 'prop-types';
import Building from './Building';
import BuildingInfo from './BuildingInfo';
import buildings from '../settings/buildings';

const StorePanel = props => (
  <div className="store_panel">
    <h1 className="store_panel__header">Store</h1>
    <div className="store_panel__buildings">
      <div className="store_panel__separator">
        <span>Buildings</span>
      </div>
      { buildings.map(building => (<Building
        key={building.name}
        data={building}
        cookiesAmount={props.cookiesAmount}
        buildingBought={props.buildingBought}
      />)) }
    </div>
    <BuildingInfo />
  </div>
);

StorePanel.propTypes = {
  cookiesAmount: PropTypes.number.isRequired,
  buildingBought: PropTypes.func.isRequired,
};

export default StorePanel;
