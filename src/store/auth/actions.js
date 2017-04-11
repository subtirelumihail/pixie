import authTypes from './types';

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
    setTimeout(() => {
      if (username === 'hello' && password === 'world') {
        dispatch(loginSuccess('1234'));
      } else {
        dispatch(loginFail('Incorect credentials'));
      }
    }, 1000);
  };
};


export default {
  loginRequest,
  loginSuccess,
  loginMakeRequest
};
