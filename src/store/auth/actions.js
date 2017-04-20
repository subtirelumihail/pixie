import authTypes from './types';
import { request } from 'lib/request';
import { setToken, removeToken } from 'lib/auth';
import forwardTo from 'utils/forwardTo';
import { ENDPOINT } from '../../../configs/api/api.config.js';

export const loginRequest = (username, password) => ({
  type: authTypes.LOGIN_REQUEST,
  payload: {
    username,
    password,
  }
});

export const loginSuccess = token => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: token
});

export const loginFail = error => ({
  type: authTypes.LOGIN_FAIL,
  error
});

export const loginMakeRequest = ({ username, password }) => {
  return (dispatch) => {
    dispatch(loginRequest(username, password));
    request.post(`${ENDPOINT.URL}/login`, {
      body: JSON.stringify({ username, password })
    })
      .then((res) => {
        if (res.error) {
          dispatch(loginFail(res.error));
        } else if (res.token) {
          dispatch(loginSuccess(res.token));
          setToken(res.token);
        } else {
          dispatch(loginFail());
        }
      })
      .catch(() => {
        dispatch(loginFail('There was an error with the request.'));
      });
  };
};

export const logout = () => {
  removeToken();
  forwardTo('/login');
  return {
    type: authTypes.LOGOUT
  };
};


export default {
  loginRequest,
  loginSuccess,
  loginMakeRequest
};
