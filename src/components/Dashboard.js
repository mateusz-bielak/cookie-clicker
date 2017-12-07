import React from 'react';
import CookiePanel from './CookiePanel';
import StorePanel from './StorePanel';

class Dashboard extends React.Component {
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
      <div className="dashboard">
        <CookiePanel
          cookiesAmount={this.state.cookiesAmount}
          cookiesPerSecond={this.state.cookiesPerSecond}
          addCookie={this.addCookie}
        />
        <StorePanel />
      </div>
    );
  }
}

export default Dashboard;
