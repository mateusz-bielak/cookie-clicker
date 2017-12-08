import React from 'react';
import CookiePanel from './CookiePanel';
import StorePanel from './StorePanel';

class Dashboard extends React.Component {
  state = {
    cookiesAmount: 0,
    cookiesPerSecond: 0,
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
        cookiesAmount: prevState.cookiesAmount + prevState.cookiesPerSecond,
      }));
    }, 1000);
  }

  addCookie = () => {
    this.setState(prevState => ({
      cookiesAmount: prevState.cookiesAmount + 1,
    }));
  }

  buildingBought = (cost) => {
    this.setState(prevState => ({
      cookiesAmount: prevState.cookiesAmount - cost,
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
        <StorePanel
          cookiesAmount={this.state.cookiesAmount}
          buildingBought={this.buildingBought}
        />
      </div>
    );
  }
}

export default Dashboard;
