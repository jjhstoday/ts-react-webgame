import { produce } from 'immer';
import {
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccesstAction,
  LogOutAction,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE
} from '../actions/user';

export interface UserState {
  isLoggingIn: boolean;
  data: {
    nickname: string;
  } | null;
}
const initialState: UserState = {
  isLoggingIn: false,
  data: null
};

type UserReducerActions =
  | LogInFailureAction
  | LogInRequestAction
  | LogInSuccesstAction
  | LogOutAction;
const userReducer = (prevState = initialState, action: UserReducerActions) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
