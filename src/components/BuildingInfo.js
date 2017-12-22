import React from 'react';
import smallCookie from '../img/perfectCookie-small.png';

const BuildingInfo = () => (
  <div className="building_info">
    <div className="building_info__header">
      <div className="building_info__name">
        <p>Producent</p>
        <p>[owned: 0]</p>
      </div>
      <p className="building_info__cost">
        <img src={`./public/${smallCookie}`} alt="Cookie.png" />
        1000
      </p>
    </div>
    <p className="building_info__description">Desctiption</p>
    <ul className="building_info__stats">
      <li>• each farm produces 0 cookies per second</li>
      <li>• 80 cursors producing 00 cookies per second</li>
    </ul>
  </div>
);

export default BuildingInfo;
