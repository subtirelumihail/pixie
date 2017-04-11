import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from 'components/common/LoginForm';

import { loginMakeRequest } from 'store/auth/actions';

const mapStateToProps = ({ auth: { form: { username, password }, error, isLoading } }) => ({
  username,
  password,
  isLoading,
  error
});

const mapDispatchToProps = dispatch => ({
  handleLogin: bindActionCreators(loginMakeRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

