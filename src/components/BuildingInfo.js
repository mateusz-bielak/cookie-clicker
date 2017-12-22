import React from 'react';
import PropTypes from 'prop-types';
import smallCookie from '../img/perfectCookie-small.png';

const BuildingInfo = props => (
  <div className="building_info">
    <div className="building_info__header">
      <div className="building_info__name">
        <p>{props.producentInfo.name}</p>
        <p>[owned: {props.producentInfo.amount}]</p>
      </div>
      <p className="building_info__cost">
        <img src={`./public/${smallCookie}`} alt="Cookie.png" />
        {props.producentInfo.cost}
      </p>
    </div>
    <p className="building_info__description">{props.producentInfo.description}</p>
    <ul className="building_info__stats">
      <li>• each farm produces {props.producentInfo.productionPerSecond} cookies per second</li>
      <li>• {props.producentInfo.amount} cursors producing&nbsp;
        {(props.producentInfo.amount * props.producentInfo.productionPerSecond).toFixed(1)}&nbsp;
        cookies per second
      </li>
    </ul>
  </div>
);

BuildingInfo.propTypes = {
  producentInfo: PropTypes.object.isRequired,
};

export default BuildingInfo;
