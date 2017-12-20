import React from 'react';
import CookiePanel from './CookiePanel';
import StorePanel from './StorePanel';
import { getFromDatabase } from '../indexedDB/methods';
import { databaseName, databaseVersion } from '../indexedDB/setup';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookiesAmount: 0,
      cookiesPerSecond: 0,
    };
    const openDatabase = indexedDB.open(databaseName, databaseVersion);
    openDatabase.onsuccess = (event) => {
      const database = event.target.result;
      const request = getFromDatabase(database, 'cookies');

      request.onsuccess = (cookies) => {
        this.setState(() => ({
          cookiesAmount: cookies.target.result ? Number(cookies.target.result[0]) : 0,
          cookiesPerSecond: cookies.target.result ? Number(cookies.target.result[1]) : 0,
        }));
      };
    };
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
