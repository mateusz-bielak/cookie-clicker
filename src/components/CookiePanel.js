import React from 'react';
import PropTypes from 'prop-types';

class CookiePanel extends React.Component {
  cookieBouncing = () => {
    this.props.addCookie();
    document.querySelector('.cookie_panel__button').classList.toggle('cookie_panel__button--bounce');
  }

  render() {
    return (
      <div className="cookie_panel">
        <input
          className="cookie_panel__header"
          type="text"
          defaultValue="SkyGate Ticket"
        />
        <div className="cookie_panel__stats">
          <p>{this.props.cookiesAmount.toFixed(0)} cookies</p>
          <p>per second: {this.props.cookiesPerSecond.toFixed(1)}</p>
        </div>
        <button
          className="cookie_panel__button"
          onClick={this.cookieBouncing}
        />
      </div>
    );
  }
}

CookiePanel.propTypes = {
  cookiesAmount: PropTypes.number.isRequired,
  cookiesPerSecond: PropTypes.number.isRequired,
  addCookie: PropTypes.func.isRequired,
};

export default CookiePanel;
