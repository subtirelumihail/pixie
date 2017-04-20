import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import styles from './Header.scss';

const Header = props => (
  <header className={styles.container}>
    <div className={styles.left}>
      Test
    </div>
    <div>
      <Button onClick={props.handleLogout}>Logout</Button>
    </div>
  </header>
);

Header.propTypes = {
  handleLogout: PropTypes.func
};

Header.defaultProps = {
  handleLogout: () => {}
};

export default Header;
