import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      props.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    )}
  />
);

Private.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

Private.defaultProps = {
  location: null
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => {
  return {
    isAuthenticated
  };
};

export default withRouter(connect(mapStateToProps)(Private));

