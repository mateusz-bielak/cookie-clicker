import React from 'react';
import CookiePanel from './CookiePanel';
import StorePanel from './StorePanel';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <CookiePanel />
        <StorePanel />
      </div>
    );
  }
}

export default Dashboard;
