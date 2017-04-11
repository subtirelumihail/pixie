import createConstants from 'utils/redux/createConstants';

const types = createConstants([
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAIL'
]);

export default types;
