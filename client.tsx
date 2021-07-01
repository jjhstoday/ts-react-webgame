import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './GuGuDan';
// import NumberBaseball from './NumberBaseball';
// import ResponseCheck from './ResponseCheck';
// import RSP from './RSP';
import Lotto from './Lotto';

const Hot = hot(Lotto);

ReactDOM.render(<Hot />, document.querySelector('#root'));
