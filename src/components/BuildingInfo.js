import React from 'react';
import smallCookie from '../img/perfectCookie-small.png';

const BuildingInfo = () => (
  <div className="building_info">
    <div className="building_info__header">
      <div className="building_info__name">
        <p>Producent</p>
        <p>[owned: 0]</p>
      </div>
      <p>
        <img src={`./public/${smallCookie}`} alt="Cookie.png" />
        1000
      </p>

    </div>
  </div>
);

export default BuildingInfo;
