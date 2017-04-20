import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from 'components/ui/Header';
import { logout } from 'store/auth/actions';

const mapDispatchToProps = dispatch => ({
  handleLogout: bindActionCreators(logout, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);
