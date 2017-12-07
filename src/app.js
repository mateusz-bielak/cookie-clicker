import React from 'react';
import ReactDOM from 'react-dom';
import CookiePanel from './components/CookiePanel';
import StorePanel from './components/StorePanel';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const test = (
  <div className="dashboard">
    <CookiePanel />
    <StorePanel />
  </div>
);

ReactDOM.render(test, document.querySelector('#app'));
