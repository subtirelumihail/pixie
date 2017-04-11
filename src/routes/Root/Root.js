import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from 'layouts/Main';
import Private from 'layouts/Private';

import * as Routes from 'routes/Routes';

const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main>
          <Link to="/home">Protected Page</Link>
          <Route path="/login" component={Routes.Login} />
          <Private path="/home" component={Routes.Home} />
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
