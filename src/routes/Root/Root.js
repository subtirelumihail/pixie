import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import Main from 'layouts/Main';
import Private from 'layouts/Private';

import * as Routes from 'routes/Routes';

const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main>
          <Link to="/home">Protected Page WOW</Link>
          <Route path="/login" component={Routes.Login} />
          <Private path="/home" component={Routes.Home} />
        </Main>
      </ConnectedRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
