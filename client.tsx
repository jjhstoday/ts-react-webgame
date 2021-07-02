import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './GuGuDan';
// import NumberBaseball from './NumberBaseball';
// import ResponseCheck from './ResponseCheck';
// import RSP from './RSP';
// import Lotto from './Lotto';
// import TicTacToe from './TicTacToe';
import MineSearch from './MineSearch';

const Hot = hot(MineSearch);

ReactDOM.render(<Hot />, document.querySelector('#root'));
