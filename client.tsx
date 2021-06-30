import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './GuGuDan';
// import NumberBaseball from './NumberBaseball';
// import ResponseCheck from './ResponseCheck';
import RSP from './RSP';

const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));
