import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

// import GuGuDan from './GuGuDan';
// import NumberBaseball from './NumberBaseball';
// import ResponseCheck from './ResponseCheck';
// import RSP from './RSP';
// import Lotto from './Lotto';
// import TicTacToe from './TicTacToe';
// import MineSearch from './MineSearch';
// import Games from './Games';

// import store from './store';
// import App from './App';

import { StoreProvider } from './Context';
import AppMobX from './AppMobX';

const Hot = hot(AppMobX);

ReactDOM.render(
  <StoreProvider>
    <Hot />
  </StoreProvider>,
  document.querySelector('#root')
);
