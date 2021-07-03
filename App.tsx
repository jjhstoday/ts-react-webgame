import React, { FunctionComponent } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './actions/user';
import { UserState } from './reducers/user';
import { RootState } from './reducers';

const App: FunctionComponent = () => {
  const { isLoggingIn, data } = useSelector<RootState, UserState>(
    state => state.user
  );
  const dispatch = useDispatch();

  const onLogIn = () => {
    dispatch(
      logIn({
        id: 'jihye',
        password: '비밀번호'
      })
    );
  };

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {isLoggingIn ? (
        <div>로그인 중</div>
      ) : data ? (
        <div>{data.nickname}</div>
      ) : (
        '로그인 해주세요.'
      )}
      {!data ? (
        <button onClick={onLogIn}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

export default App;
