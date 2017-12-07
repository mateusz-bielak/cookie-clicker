import React from 'react';
import PropTypes from 'prop-types';

const CookiePanel = props => (
  <div className="cookie_panel">
    <h1 className="cookie_panel__header">SkyGate Ticket</h1>
    <div className="cookie_panel__stats">
      <p>{props.cookiesAmount} cookies</p>
      <p>per second: {props.cookiesPerSecond}</p>
    </div>
    <button
      className="cookie_panel__button"
      onClick={props.addCookie}
    >
      <img
        src="https://dummyimage.com/256x256/906734/fff.jpg"
        alt="cookie.jpg"
      />
    </button>
  </div>
);

CookiePanel.propTypes = {
  cookiesAmount: PropTypes.number.isRequired,
  cookiesPerSecond: PropTypes.number.isRequired,
  addCookie: PropTypes.func.isRequired,
};

export default CookiePanel;
