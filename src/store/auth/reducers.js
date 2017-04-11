import createReducer from 'utils/redux/createReducer';
import authTypes from './types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  form: {
    username: '',
    password: ''
  }
};

const loginSuccess = (state, token) => {
  return {
    ...initialState,
    token,
    isAuthenticated: true
  };
};

const loginRequest = (state, { username, password }) => {
  return {
    ...state,
    isLoading: true,
    form: {
      username,
      password
    },
    error: null
  };
};

const loginFail = (state, { error }) => {
  return {
    ...state,
    isAuthenticated: false,
    isLoading: false,
    error
  };
};

export default createReducer(initialState, {
  [authTypes.LOGIN_REQUEST]: loginRequest,
  [authTypes.LOGIN_SUCCESS]: loginSuccess,
  [authTypes.LOGIN_FAIL]: loginFail
});
