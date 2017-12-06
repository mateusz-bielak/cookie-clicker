import React from 'react';

class CookiePanel extends React.Component {
  state = {
    cookiesAmount: 0,
    cookiesPerSecond: 0,
  }

  addCookie = () => {
    this.setState(prevState => ({
      cookiesAmount: prevState.cookiesAmount + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>SkyGate Ticket</h1>
        <div>
          <p>{this.state.cookiesAmount} cookies</p>
          <p>per second: {this.state.cookiesPerSecond}</p>
        </div>
        <button onClick={this.addCookie}>
          <img
            src="https://dummyimage.com/256x256/906734/fff.jpg"
            alt="cookie.jpg"
          />
        </button>
      </div>
    );
  }
}

export default CookiePanel;
