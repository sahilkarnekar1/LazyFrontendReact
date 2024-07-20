// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Leaderboard from './Leaderboard';

ReactDOM.render(
  <Provider store={store}>
    <Leaderboard />
  </Provider>,
  document.getElementById('root')
);
