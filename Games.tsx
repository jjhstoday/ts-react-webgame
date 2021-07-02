import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import GameMatcher from './GameMatcher';

export default function Games() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/game/number-baseball?limit=10&skip=5&page=3'>숫자야구</Link>
        &nbsp;
        <Link to='/game/rock-scissors-paper'>가위바위보</Link>
        &nbsp;
        <Link to='/game/lotto-generator'>로또생성기</Link>
        &nbsp;
        <Link to='/game/index'>게임 매쳐</Link>
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={GameMatcher} />
          <Route path='/game/:name' component={GameMatcher} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
