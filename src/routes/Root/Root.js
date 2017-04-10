import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Main from 'layouts/Main';
import PropTypes from 'prop-types';

import * as Routes from 'routes/Routes';

const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main>
          <Route path="/" component={Routes.Home} />
        </Main>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
