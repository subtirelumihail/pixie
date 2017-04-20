import createHistory from 'history/createBrowserHistory';

/**
 * Forward to a specific route.
 *
 * @method forwardTo
 * @param  {String} path The path to forward to.
 */
const history = createHistory();
const forwardTo = (path) => {
  history.push(path);
};

export default forwardTo;
