import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import Root from './routes/Root';
import '../node_modules/semantic-ui-css/semantic.css';

const history = createHistory();
const store = configureStore();
const appContainer = document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  appContainer
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes/Root', () => {
    const NewRoot = require('./routes/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      appContainer
    );
  });
}
