const TOKEN = 'TOKEN';

export const getToken = () => localStorage.getItem(TOKEN);
export const isAuthenticated = () => !!localStorage.getItem(TOKEN);
export const removeToken = () => localStorage.removeItem(TOKEN);
export const setToken = token => localStorage.setItem(TOKEN, token);

export default {
  getToken,
  removeToken,
  setToken
};
