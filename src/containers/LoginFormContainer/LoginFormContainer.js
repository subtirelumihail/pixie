import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import LoginForm from 'components/common/LoginForm';

import { loginMakeRequest } from 'store/auth/actions';

const LoginFormContainer = (props) => {
  const { isAuthenticated, location } = props;

  if (isAuthenticated) {
    const from = location.state ? location.state.from : '/';
    return <Redirect to={from} />;
  }

  return <LoginForm {...props} />;
};

const mapStateToProps = ({ auth: {
  form: { username, password }, error, isLoading, isAuthenticated }
}) => ({
  username,
  password,
  isLoading,
  isAuthenticated,
  error
});

const mapDispatchToProps = dispatch => ({
  handleLogin: bindActionCreators(loginMakeRequest, dispatch)
});

LoginFormContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object
};

LoginFormContainer.defaultProps = {
  location: null
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(LoginFormContainer);

