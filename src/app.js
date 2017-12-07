import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const test = (
  <Dashboard />
);

ReactDOM.render(test, document.querySelector('#app'));
