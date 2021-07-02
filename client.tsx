import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './GuGuDan';
// import NumberBaseball from './NumberBaseball';
// import ResponseCheck from './ResponseCheck';
// import RSP from './RSP';
// import Lotto from './Lotto';
// import TicTacToe from './TicTacToe';
// import MineSearch from './MineSearch';
import Games from './Games';

const Hot = hot(Games);

ReactDOM.render(<Hot />, document.querySelector('#root'));
