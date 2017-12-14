import React from 'react';
import CookiePanel from './CookiePanel';
import StorePanel from './StorePanel';

class Dashboard extends React.Component {
  state = {
    cookiesAmount: 0,
    cookiesPerSecond: 0,
  }

  componentDidMount = () => {
    this.addCookiesPerSecond();
  }

  addCookie = () => {
    this.setState(prevState => ({
      cookiesAmount: prevState.cookiesAmount + 1,
    }));
  }

  addCookiesPerSecond = () => {
    setInterval(() => {
      this.setState(prevState => ({
        cookiesAmount: prevState.cookiesAmount + (prevState.cookiesPerSecond / 10),
      }));
    }, 100);
  }

  buildingBought = (cost, cookiesPerSecond) => {
    this.setState(prevState => ({
      cookiesAmount: prevState.cookiesAmount - cost,
      cookiesPerSecond: prevState.cookiesPerSecond + cookiesPerSecond,
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
        <div className="dashboard__separator" />
        <div className="dashboard__space" />
        <div className="dashboard__separator" />
        <div className="dashboard__store_container">
          <StorePanel
            cookiesAmount={this.state.cookiesAmount}
            buildingBought={this.buildingBought}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
