import React from 'react';
import PropTypes from 'prop-types';
import smallCookie from '../img/perfectCookie-small.png';

const BuildingInfo = props => (
  <div className={props.buildingInfo.onHover ? 'building_info' : 'building_info--hidden'}>
    <div className="building_info__header">
      <div className="building_info__name">
        <p>{props.buildingInfo.name}</p>
        <p>[owned: {props.buildingInfo.amount}]</p>
      </div>
      <p className={props.buildingInfo.areEnoughCookies ? 'building_info__cost' : 'building_info__cost--too_expensive'}>
        <img src={`./public/${smallCookie}`} alt="Cookie.png" />
        {props.buildingInfo.cost}
      </p>
    </div>
    <p className="building_info__description">{props.buildingInfo.description}</p>
    <ul className="building_info__stats">
      <li>• each farm produces {props.buildingInfo.productionPerSecond} cookies per second</li>
      <li>• {props.buildingInfo.amount} cursors producing&nbsp;
        {(props.buildingInfo.amount * props.buildingInfo.productionPerSecond).toFixed(1)}&nbsp;
        cookies per second
      </li>
    </ul>
  </div>
);

BuildingInfo.propTypes = {
  buildingInfo: PropTypes.object.isRequired,
};

export default BuildingInfo;
